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

export interface IPage extends Document {
  slug: string;
  name: string;
  seo: ISEO;
  updatedAt: Date;
}

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

const pageSchema = new Schema<IPage>({
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true
  },
  name: { 
    type: String, 
    required: true 
  },
  seo: seoSchema,
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.models.Page || mongoose.model<IPage>('Page', pageSchema); 