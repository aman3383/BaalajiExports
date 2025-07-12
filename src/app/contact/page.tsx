"use client";

import React, { useState } from "react";
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

// Add comprehensive country codes data
const countryCodes = [
  { code: "+93", country: "Afghanistan (AF)" },
  { code: "+355", country: "Albania (AL)" },
  { code: "+213", country: "Algeria (DZ)" },
  { code: "+376", country: "Andorra (AD)" },
  { code: "+244", country: "Angola (AO)" },
  { code: "+1", country: "Antigua and Barbuda (AG)" },
  { code: "+54", country: "Argentina (AR)" },
  { code: "+374", country: "Armenia (AM)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+43", country: "Austria (AT)" },
  { code: "+994", country: "Azerbaijan (AZ)" },
  { code: "+1", country: "Bahamas (BS)" },
  { code: "+973", country: "Bahrain (BH)" },
  { code: "+880", country: "Bangladesh (BD)" },
  { code: "+1", country: "Barbados (BB)" },
  { code: "+375", country: "Belarus (BY)" },
  { code: "+32", country: "Belgium (BE)" },
  { code: "+501", country: "Belize (BZ)" },
  { code: "+229", country: "Benin (BJ)" },
  { code: "+975", country: "Bhutan (BT)" },
  { code: "+591", country: "Bolivia (BO)" },
  { code: "+387", country: "Bosnia and Herzegovina (BA)" },
  { code: "+267", country: "Botswana (BW)" },
  { code: "+55", country: "Brazil (BR)" },
  { code: "+673", country: "Brunei (BN)" },
  { code: "+359", country: "Bulgaria (BG)" },
  { code: "+226", country: "Burkina Faso (BF)" },
  { code: "+257", country: "Burundi (BI)" },
  { code: "+855", country: "Cambodia (KH)" },
  { code: "+237", country: "Cameroon (CM)" },
  { code: "+1", country: "Canada (CA)" },
  { code: "+238", country: "Cape Verde (CV)" },
  { code: "+236", country: "Central African Republic (CF)" },
  { code: "+235", country: "Chad (TD)" },
  { code: "+56", country: "Chile (CL)" },
  { code: "+86", country: "China (CN)" },
  { code: "+57", country: "Colombia (CO)" },
  { code: "+269", country: "Comoros (KM)" },
  { code: "+242", country: "Congo (CG)" },
  { code: "+243", country: "Congo, Democratic Republic (CD)" },
  { code: "+506", country: "Costa Rica (CR)" },
  { code: "+385", country: "Croatia (HR)" },
  { code: "+53", country: "Cuba (CU)" },
  { code: "+357", country: "Cyprus (CY)" },
  { code: "+420", country: "Czech Republic (CZ)" },
  { code: "+45", country: "Denmark (DK)" },
  { code: "+253", country: "Djibouti (DJ)" },
  { code: "+1", country: "Dominica (DM)" },
  { code: "+1", country: "Dominican Republic (DO)" },
  { code: "+670", country: "East Timor (TL)" },
  { code: "+593", country: "Ecuador (EC)" },
  { code: "+20", country: "Egypt (EG)" },
  { code: "+503", country: "El Salvador (SV)" },
  { code: "+240", country: "Equatorial Guinea (GQ)" },
  { code: "+291", country: "Eritrea (ER)" },
  { code: "+372", country: "Estonia (EE)" },
  { code: "+251", country: "Ethiopia (ET)" },
  { code: "+679", country: "Fiji (FJ)" },
  { code: "+358", country: "Finland (FI)" },
  { code: "+33", country: "France (FR)" },
  { code: "+241", country: "Gabon (GA)" },
  { code: "+220", country: "Gambia (GM)" },
  { code: "+995", country: "Georgia (GE)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+233", country: "Ghana (GH)" },
  { code: "+30", country: "Greece (GR)" },
  { code: "+1", country: "Grenada (GD)" },
  { code: "+502", country: "Guatemala (GT)" },
  { code: "+224", country: "Guinea (GN)" },
  { code: "+245", country: "Guinea-Bissau (GW)" },
  { code: "+592", country: "Guyana (GY)" },
  { code: "+509", country: "Haiti (HT)" },
  { code: "+504", country: "Honduras (HN)" },
  { code: "+852", country: "Hong Kong (HK)" },
  { code: "+36", country: "Hungary (HU)" },
  { code: "+354", country: "Iceland (IS)" },
  { code: "+91", country: "India (IN)" },
  { code: "+62", country: "Indonesia (ID)" },
  { code: "+98", country: "Iran (IR)" },
  { code: "+964", country: "Iraq (IQ)" },
  { code: "+353", country: "Ireland (IE)" },
  { code: "+972", country: "Israel (IL)" },
  { code: "+39", country: "Italy (IT)" },
  { code: "+225", country: "Ivory Coast (CI)" },
  { code: "+1", country: "Jamaica (JM)" },
  { code: "+81", country: "Japan (JP)" },
  { code: "+962", country: "Jordan (JO)" },
  { code: "+7", country: "Kazakhstan (KZ)" },
  { code: "+254", country: "Kenya (KE)" },
  { code: "+686", country: "Kiribati (KI)" },
  { code: "+850", country: "Korea, North (KP)" },
  { code: "+82", country: "Korea, South (KR)" },
  { code: "+965", country: "Kuwait (KW)" },
  { code: "+996", country: "Kyrgyzstan (KG)" },
  { code: "+856", country: "Laos (LA)" },
  { code: "+371", country: "Latvia (LV)" },
  { code: "+961", country: "Lebanon (LB)" },
  { code: "+266", country: "Lesotho (LS)" },
  { code: "+231", country: "Liberia (LR)" },
  { code: "+218", country: "Libya (LY)" },
  { code: "+423", country: "Liechtenstein (LI)" },
  { code: "+370", country: "Lithuania (LT)" },
  { code: "+352", country: "Luxembourg (LU)" },
  { code: "+853", country: "Macau (MO)" },
  { code: "+389", country: "Macedonia (MK)" },
  { code: "+261", country: "Madagascar (MG)" },
  { code: "+265", country: "Malawi (MW)" },
  { code: "+60", country: "Malaysia (MY)" },
  { code: "+960", country: "Maldives (MV)" },
  { code: "+223", country: "Mali (ML)" },
  { code: "+356", country: "Malta (MT)" },
  { code: "+692", country: "Marshall Islands (MH)" },
  { code: "+222", country: "Mauritania (MR)" },
  { code: "+230", country: "Mauritius (MU)" },
  { code: "+52", country: "Mexico (MX)" },
  { code: "+691", country: "Micronesia (FM)" },
  { code: "+373", country: "Moldova (MD)" },
  { code: "+377", country: "Monaco (MC)" },
  { code: "+976", country: "Mongolia (MN)" },
  { code: "+382", country: "Montenegro (ME)" },
  { code: "+212", country: "Morocco (MA)" },
  { code: "+258", country: "Mozambique (MZ)" },
  { code: "+95", country: "Myanmar (MM)" },
  { code: "+264", country: "Namibia (NA)" },
  { code: "+674", country: "Nauru (NR)" },
  { code: "+977", country: "Nepal (NP)" },
  { code: "+31", country: "Netherlands (NL)" },
  { code: "+64", country: "New Zealand (NZ)" },
  { code: "+505", country: "Nicaragua (NI)" },
  { code: "+227", country: "Niger (NE)" },
  { code: "+234", country: "Nigeria (NG)" },
  { code: "+47", country: "Norway (NO)" },
  { code: "+968", country: "Oman (OM)" },
  { code: "+92", country: "Pakistan (PK)" },
  { code: "+680", country: "Palau (PW)" },
  { code: "+970", country: "Palestine (PS)" },
  { code: "+507", country: "Panama (PA)" },
  { code: "+675", country: "Papua New Guinea (PG)" },
  { code: "+595", country: "Paraguay (PY)" },
  { code: "+51", country: "Peru (PE)" },
  { code: "+63", country: "Philippines (PH)" },
  { code: "+48", country: "Poland (PL)" },
  { code: "+351", country: "Portugal (PT)" },
  { code: "+974", country: "Qatar (QA)" },
  { code: "+40", country: "Romania (RO)" },
  { code: "+7", country: "Russia (RU)" },
  { code: "+250", country: "Rwanda (RW)" },
  { code: "+1", country: "Saint Kitts and Nevis (KN)" },
  { code: "+1", country: "Saint Lucia (LC)" },
  { code: "+1", country: "Saint Vincent and the Grenadines (VC)" },
  { code: "+685", country: "Samoa (WS)" },
  { code: "+378", country: "San Marino (SM)" },
  { code: "+239", country: "Sao Tome and Principe (ST)" },
  { code: "+966", country: "Saudi Arabia (SA)" },
  { code: "+221", country: "Senegal (SN)" },
  { code: "+381", country: "Serbia (RS)" },
  { code: "+248", country: "Seychelles (SC)" },
  { code: "+232", country: "Sierra Leone (SL)" },
  { code: "+65", country: "Singapore (SG)" },
  { code: "+421", country: "Slovakia (SK)" },
  { code: "+386", country: "Slovenia (SI)" },
  { code: "+677", country: "Solomon Islands (SB)" },
  { code: "+252", country: "Somalia (SO)" },
  { code: "+27", country: "South Africa (ZA)" },
  { code: "+211", country: "South Sudan (SS)" },
  { code: "+34", country: "Spain (ES)" },
  { code: "+94", country: "Sri Lanka (LK)" },
  { code: "+249", country: "Sudan (SD)" },
  { code: "+597", country: "Suriname (SR)" },
  { code: "+268", country: "Swaziland (SZ)" },
  { code: "+46", country: "Sweden (SE)" },
  { code: "+41", country: "Switzerland (CH)" },
  { code: "+963", country: "Syria (SY)" },
  { code: "+886", country: "Taiwan (TW)" },
  { code: "+992", country: "Tajikistan (TJ)" },
  { code: "+255", country: "Tanzania (TZ)" },
  { code: "+66", country: "Thailand (TH)" },
  { code: "+228", country: "Togo (TG)" },
  { code: "+676", country: "Tonga (TO)" },
  { code: "+1", country: "Trinidad and Tobago (TT)" },
  { code: "+216", country: "Tunisia (TN)" },
  { code: "+90", country: "Turkey (TR)" },
  { code: "+993", country: "Turkmenistan (TM)" },
  { code: "+688", country: "Tuvalu (TV)" },
  { code: "+256", country: "Uganda (UG)" },
  { code: "+380", country: "Ukraine (UA)" },
  { code: "+971", country: "United Arab Emirates (AE)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+1", country: "United States (US)" },
  { code: "+598", country: "Uruguay (UY)" },
  { code: "+998", country: "Uzbekistan (UZ)" },
  { code: "+678", country: "Vanuatu (VU)" },
  { code: "+379", country: "Vatican City (VA)" },
  { code: "+58", country: "Venezuela (VE)" },
  { code: "+84", country: "Vietnam (VN)" },
  { code: "+967", country: "Yemen (YE)" },
  { code: "+260", country: "Zambia (ZM)" },
  { code: "+263", country: "Zimbabwe (ZW)" }
].sort((a, b) => a.country.localeCompare(b.country));

const ContactUs = () => {
  const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby0TvrrF1gZ3W2ZzpObFZQmV7aHEnyUn-R6Oku8xvqt5Yh5fx10_ob2CluqCXt1vSCOhg/exec";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91", // Default to India
    phone: "",
    product: "",
    productTypes: [] as string[],
    message: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    product: false,
    productTypes: false,
    message: false,
  });

  const [submitStatus, setSubmitStatus] = useState({
    open: false,
    success: false,
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      ...(name === 'product' ? { productTypes: [] } : {})
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: false, // Name is no longer required
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !/^\d{6,15}$/.test(formData.phone.replace(/[-()\s]/g, "")), // Updated phone validation
      product: false, // Product is no longer required
      productTypes: false, // Product types are no longer required
      message: false // Message is no longer required
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const submitToGoogleSheets = async (data: typeof formData) => {
    // Log the data being sent
    console.log('Submitting form data:', data);
    
    // Create ordered data object to ensure correct field order
    const orderedData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      countryCode: data.countryCode,
      phone: data.phone,
      product: data.product,
      productTypes: data.productTypes,
      message: data.message
    };

    // Convert the data to URL-encoded form data
    const formDataToSend = new URLSearchParams();
    Object.entries(orderedData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formDataToSend.append(key, value.join(','));
      } else {
        formDataToSend.append(key, value?.toString() || '');
      }
    });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSend.toString()
      });

      // Since we're using no-cors, we won't get a JSON response
      // Instead, we'll assume success if we get here without an error
      return { success: true };
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted, validating...');
    
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        console.log('Form validation passed, submitting...');
        const result = await submitToGoogleSheets(formData);
        console.log('Submit result:', result);
        
        setSubmitStatus({
          open: true,
          success: true,
          message: "Thank you for your message! We have received your inquiry and will get back to you soon."
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          product: "",
          productTypes: [],
          message: ""
        });
      } catch (error) {
        console.error('Error in form submission:', error);
        setSubmitStatus({
          open: true,
          success: false,
          message: "There was an error submitting your form. Please try again."
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log('Form validation failed');
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
              
              {/* Phone number with country code */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <FormControl sx={{ width: '40%' }}>
                  <InputLabel id="country-code-label">Country Code</InputLabel>
                  <Select
                    labelId="country-code-label"
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    label="Country Code"
                    onChange={handleSelectChange}
                    disabled={isSubmitting}
                  >
                    {countryCodes.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        {`${country.code} ${country.country}`}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                
                <TextField
                  required
                  sx={{ width: '60%' }}
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  helperText={errors.phone ? "Please enter a valid phone number" : ""}
                  variant="outlined"
                  color="primary"
                  disabled={isSubmitting}
                  placeholder="Enter number without country code"
                />
              </Box>

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
                  <MenuItem value="bold-peanuts">Bold/Runner Peanuts</MenuItem>
                  <MenuItem value="spanish-peanuts">Java/Spanish Peanuts</MenuItem>
                  <MenuItem value="peanut-oil">Peanut Oil</MenuItem>
                  <MenuItem value="peanut-butter">Peanut Butter</MenuItem>
                  <MenuItem value="virginia-peanuts">Virginia Peanuts</MenuItem>
                  <MenuItem value="blanched-peanuts">Blanched Peanuts</MenuItem>
                  <MenuItem value="red-skin-peanuts">Red Skin Peanuts</MenuItem>
                  <MenuItem value="icgv-15083-peanuts">ICGV 15084/ Girnar 4 Peanuts</MenuItem>
                  <MenuItem value="icgv15090-peanuts">ICGV 15090/ Girnar 5 Peanuts</MenuItem>
                  <MenuItem value="icgv-03043-peanuts">ICGV 03043 Peanuts</MenuItem>
                  <MenuItem value="g20-peanuts">G20 Peanuts</MenuItem>
                  <MenuItem value="k6-peanuts">K6 Peanuts</MenuItem>
                  <MenuItem value="salted-peanuts">Salted Peanuts</MenuItem>
                  <MenuItem value="organic-peanuts">Organic Peanuts</MenuItem>
                  <MenuItem value="mathadi-peanuts">Mathadi Peanuts</MenuItem>
                  <MenuItem value="tj-peanuts">TJ Peanuts</MenuItem>
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