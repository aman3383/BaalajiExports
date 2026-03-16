import mongoose, { Document, Schema } from 'mongoose';

interface IMetaTag {
  type: string;
  name?: string;
  property?: string;
  httpEquiv?: string;
  content?: string;
  charset?: string;
}

interface ILinkTag {
  rel: string;
  href: string;
  hreflang?: string;
}

interface IScriptTag {
  type: string;
  content: string;
}

interface ISEO {
  title: string;
  description: string;
  metaTags?: IMetaTag[];
  linkTags?: ILinkTag[];
  scriptTags?: IScriptTag[];
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  cardContent?: string; // Short summary for blog card
  image?: string;
  seo: ISEO;
  createdAt: Date;
  updatedAt: Date;
}

export type BlogData = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  cardContent?: string;
  image?: string;
  seo: ISEO;
  createdAt: Date;
  updatedAt: Date;
};

const metaTagSchema = new Schema<IMetaTag>({
  type: { type: String, required: true },
  name: { type: String },
  property: { type: String },
  httpEquiv: { type: String },
  content: { type: String },
  charset: { type: String },
});

const linkTagSchema = new Schema<ILinkTag>({
  rel: { type: String, required: true },
  href: { type: String, required: true },
  hreflang: { type: String },
});

const scriptTagSchema = new Schema<IScriptTag>({
  type: { type: String, required: true },
  content: { type: String, required: true },
});

const seoSchema = new Schema<ISEO>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  metaTags: [metaTagSchema],
  linkTags: [linkTagSchema],
  scriptTags: [scriptTagSchema],
});

const blogSchema = new Schema<IBlog>({
  title: { 
    type: String, 
    required: true 
  },
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  content: { 
    type: String, 
    required: true 
  },
  cardContent: {
    type: String,
    default: ''
  },
  image: { 
    type: String 
  },
  seo: seoSchema,
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.models.Blog || mongoose.model<IBlog>('Blog', blogSchema); 