"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  CircularProgress
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import type { SelectChangeEvent } from "@mui/material/Select";
import i18nCountries from "i18n-iso-countries";
import english from "i18n-iso-countries/langs/en.json";
import { getCountryCallingCode } from "libphonenumber-js";
import type { CountryCode } from "libphonenumber-js";

const ContactUs = () => {
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz4THwJB4p-lC4MLcWxfpn_7nBRpfBu1IWEvl2tdFsll2Lym8iaABOaaWo5tpg51ING/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "",
    message: "",
    product: "",
    productTypes: [] as string[]
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    countryCode: false,
    message: false,
    product: false,
    productTypes: false
  });

  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryOptions, setCountryOptions] = useState<Array<{ iso: string; name: string; dial: string }>>([]);

  useEffect(() => {
    try {
      // Build the dropdown options on the client to avoid SSR issues with locale/metadata.
      i18nCountries.registerLocale(english);
      const names = i18nCountries.getNames("en", { select: "official" }) as Record<string, string>;

      const options = Object.entries(names)
        .map(([iso, name]) => {
          try {
            // `i18n-iso-countries` returns ISO codes as strings.
            // `libphonenumber-js` expects a narrower `CountryCode` type, so we cast safely.
            const dial = getCountryCallingCode(iso as CountryCode);
            if (!dial) return null;
            return { iso, name, dial: String(dial) };
          } catch {
            return null;
          }
        })
        .filter(Boolean) as Array<{ iso: string; name: string; dial: string }>;

      options.sort((a, b) => a.name.localeCompare(b.name));
      setCountryOptions(options);
    } catch (err) {
      // If this fails, we still want the form to render.
      console.error("Failed to build country code list", err);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value
    });
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData({
      ...formData,
      productTypes: checked
        ? [...formData.productTypes, value]
        : formData.productTypes.filter((type) => type !== value)
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset product types when product changes
      productTypes: []
    });
  };

  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      countryCode: value
    });
  };

  const validateForm = () => {
    const phoneDigits = formData.phone.replace(/\D/g, "");
    const newErrors = {
      name: false, // Name is no longer required
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^[0-9]{6,15}$/.test(phoneDigits),
      countryCode: !formData.countryCode,
      message: false, // Message is no longer required
      product: false, // Product is no longer required
      productTypes: false // Product types are no longer required
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    // Send as form-encoded so Google Apps Script receives it reliably (not JSON)
    const params = new URLSearchParams();
    params.set("name", data.name);
    params.set("email", data.email);
    params.set("countryCode", data.countryCode);
    params.set("phone", data.phone.replace(/\D/g, ""));
    params.set("message", data.message);
    params.set("product", data.product);
    params.set("productTypes", Array.isArray(data.productTypes) ? data.productTypes.join(", ") : String(data.productTypes || ""));
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString(),
      mode: "no-cors"
    });
    return { success: true };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await submitToGoogleSheets(formData);
        setSubmitStatus({
          open: true,
          success: true,
          message:
            "Thank you for your message! We have received your inquiry and will get back to you soon."
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "",
          message: "",
          product: "",
          productTypes: []
        });
      } catch (error) {
        setSubmitStatus({
          open: true,
          success: false,
          message: "There was an error submitting your form. Please try again."
        });
      } finally {
        setIsSubmitting(false);
      }
          } else {
        setSubmitStatus({
          open: true,
          success: false,
          message: "Please provide a valid email address and phone number."
        });
      }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus({
      ...submitStatus,
      open: false
    });
  };

  // Get product type options based on selected product
  const getProductTypeOptions = () => {
    switch (formData.product) {
      case "peanut-oil":
        return [
          { value: "refined", label: "Refined" },
          { value: "cold-pressed-filtered", label: "Cold-Pressed or Filtered" },
          { value: "wood-pressed", label: "Wood-Pressed" },
          { value: "hot-pressed-groundnut-oil", label: "Hot Pressed Groundnut Oil" },
          { value: "wood-pressed-peanut-oil", label: "Wood Pressed Peanut Oil" },
          { value: "cold-pressed-peanut-oil", label: "Cold Pressed Peanut Oil" }
        ];
      case "peanut-butter":
        return [
          { value: "creamy-peanut-butter", label: "Creamy Peanut Butter" },
          { value: "crunchy-peanut-butter", label: "Crunchy Peanut Butter" },
          { value: "jaggery-peanut-butter", label: "Jaggery Peanut Butter" },
          { value: "organic-peanut-butter", label: "Organic Peanut Butter" },
          { value: "sugar-free-peanut-butter", label: "Sugar Free Peanut Butter" },
          { value: "chocolate-peanut-butter", label: "Chocolate Peanut Butter" },
          { value: "customizable", label: "Customizable" }
        ];
      default:
        return [
          { value: "raw-peanuts-with-shell", label: "Raw Peanuts (with shell)" },
          { value: "peanut-kernels", label: "Peanut Kernels" },
          { value: "blanched-peanuts", label: "Blanched Peanuts" },
          { value: "roasted-blanched-peanuts", label: "Roasted and Blanched Peanuts" }
        ];
    }
  };

  // Check if product types section should be shown
  const shouldShowProductTypes = () => {
    return formData.product !== "";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8, bgcolor: "background.default" }}>
      <Grid container spacing={4}>
        {/* Left side - Logo and contact intro */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/* Company Logo */}
          <Box
            sx={{
              width: "80%",
              maxWidth: 320,
              height: "auto",
              mb: 0.5,
              filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.15))"
            }}
          >
            <Image
              src={Logo}
              alt="Balaji Exports Logo"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </Box>
          {/* Company Slogan */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "secondary.main",
              textAlign: "center",
              mt: -5,
              mb: 2,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.1rem" }
            }}
          >
            Excellence in every shell
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "primary.main", textAlign: "center", mt: 2, fontFamily: "Inter" }}
          >
            Get in touch with us
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ color: "text.secondary", textAlign: "center", mt: 1, fontFamily: "Inter" }}
          >
            We're here to answer any questions you might have
          </Typography>
        </Grid>
        {/* Right side - Contact form */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              bgcolor: "white",
              border: "1px solid",
              borderColor: "primary.light"
            }}
          >
            <Box textAlign="left" mb={4}>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                sx={{ fontWeight: "bold", color: "primary.main", fontFamily: "Lato" }}
              >
                Contact Us
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ fontFamily: "Inter" }}>
                Please fill out the form below and we'll get back to you shortly.
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth disabled={isSubmitting} error={errors.countryCode}>
                    <InputLabel id="country-code-label">Country Code</InputLabel>
                    <Select
                      labelId="country-code-label"
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      label="Country Code"
                      onChange={handleCountryCodeChange}
                    >
                      <MenuItem value="">
                        <em>Select Country</em>
                      </MenuItem>
                      {countryOptions.length === 0 ? (
                        <MenuItem value="" disabled>
                          Loading...
                        </MenuItem>
                      ) : (
                        countryOptions.map((c) => (
                          <MenuItem key={c.iso} value={`+${c.dial}`}>
                            {c.name} (+{c.dial})
                          </MenuItem>
                        ))
                      )}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    helperText={errors.phone ? "Please enter a valid phone number (6-15 digits)" : ""}
                    variant="outlined"
                    color="primary"
                    disabled={isSubmitting}
                  />
                </Grid>
              </Grid>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? "Please enter a valid email address" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              />
              <FormControl fullWidth disabled={isSubmitting}>
                <InputLabel id="product-label">Product</InputLabel>
                <Select
                  labelId="product-label"
                  id="product"
                  name="product"
                  value={formData.product}
                  label="Product"
                  onChange={handleSelectChange}
                  error={errors.product}
                >
                  <MenuItem value="">
                    <em>Select a Product</em>
                  </MenuItem>
                  <MenuItem value="bold-peanuts">Bold Peanuts</MenuItem>
                  <MenuItem value="salted-peanuts">Salted Peanuts</MenuItem>
                  <MenuItem value="red-skin-peanuts">Red Skin Peanuts</MenuItem>
                  <MenuItem value="blanched-peanuts">Blanched Peanuts</MenuItem>
                  <MenuItem value="spanish-peanuts">Spanish Peanuts</MenuItem>
                  <MenuItem value="tj-peanuts">TJ Peanuts</MenuItem>
                  <MenuItem value="organic-peanuts">Organic Peanuts</MenuItem>
                  <MenuItem value="g20-peanuts">G20 Peanuts</MenuItem>
                  <MenuItem value="k6-peanuts">K6 Peanuts</MenuItem>
                  <MenuItem value="mathadi-peanuts">Mathadi Peanuts</MenuItem>
                  <MenuItem value="girnar-peanuts">Girnar 4 - Girnar 5 Peanuts</MenuItem>
                  <MenuItem value="icgv03043-peanuts">ICGV 03043 Peanuts</MenuItem>
                  <MenuItem value="icgv15099-peanuts">ICGV 15099 Peanuts</MenuItem>
                  <MenuItem value="virginia-peanuts">Virginia Peanuts</MenuItem>
                  <MenuItem value="peanut-butter">Peanut Butter</MenuItem>
                  <MenuItem value="peanut-oil">Peanut Oil</MenuItem>
                </Select>
                {errors.product && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    Please select a product
                  </Typography>
                )}
              </FormControl>
              {shouldShowProductTypes() && (
                <FormControl component="fieldset" disabled={isSubmitting}>
                  <FormLabel component="legend" sx={{ mb: 1, color: "text.primary", fontWeight: "medium" }}>
                    Product Types of Interest
                  </FormLabel>
                  <FormGroup
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 1
                    }}
                  >
                    {getProductTypeOptions().map((option) => (
                      <FormControlLabel
                        key={option.value}
                        control={
                          <Checkbox
                            checked={formData.productTypes.includes(option.value)}
                            onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                            color="primary"
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                  {errors.productTypes && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                      Please select at least one product type
                    </Typography>
                  )}
                </FormControl>
              )}
              <TextField
                fullWidth
                id="message"
                name="message"
                label="Your Message"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message ? "Please enter your message" : ""}
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  endIcon={isSubmitting ? <CircularProgress sx={{ fontSize: 20 }} color="inherit" /> : <SendIcon />}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: 2
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* Feedback Snackbar */}
      <Snackbar
        open={submitStatus.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ContactUs; 