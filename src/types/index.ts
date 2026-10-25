export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Paid Acquisition' | 'Viral Organic' | 'Funnel CRO' | 'SEO & Directory';
  metricHighlight: string;
  metricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    kpi: string;
    value: string;
    change: string;
  }[];
  tags: string[];
  duration: string;
  channels: string[];
}

export interface MetricCard {
  label: string;
  value: string;
  subtext: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  impactMetric: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  verifiedMetric: string;
}

export interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'typography' | 'spacing' | 'motion';
  description: string;
  role: string;
  contrastRatio?: string;
}
