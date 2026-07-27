import { CompanyInfo } from '../types';

export const company: CompanyInfo = {
  name: 'شركة السدر العربية للمقاولات',
  legalName: 'شركة السدر العربية للمقاولات',
  tagline: 'الريادة في خدمات النظافة والمقاولات بالمملكة العربية السعودية',
  description:
    'تقدم شركة السدر العربية للمقاولات حلولًا متكاملة في خدمات التنظيف الاحترافي، وتشمل تنظيف واجهات المباني الزجاجية، وتنظيف خزانات المياه، ومكافحة الحشرات، وجلي الرخام، وتعقيم المنشآت السكنية والتجارية. نعتمد على فريق متخصص ومعدات حديثة لضمان أعلى معايير الجودة، ونخدم مدينة الرياض وجميع مناطق المملكة العربية السعودية.',
  foundedYear: '2009',
  phone: '+966569209216',
  whatsapp: '966569209216',
  email: 'info@al-sidr-arabia.sa',
  url: 'https://alsidral.com',
  address: {
    street: 'طريق الملك فهد، حي العليا',
    city: 'الرياض',
    region: 'منطقة الرياض',
    country: 'المملكة العربية السعودية',
    postalCode: '12211',
  },
  geo: { lat: 24.7136, lng: 46.6753 },
  hours: [
    { days: 'السبت – الخميس', hours: '8:00 ص – 10:00 م' },
    { days: 'الجمعة', hours: '2:00 م – 10:00 م' },
  ],
  social: [
    { platform: 'تويتر / X', url: 'https://x.com/alsidrarabia', icon: 'Twitter' },
    { platform: 'إنستغرام', url: 'https://www.instagram.com/alsidrcom?utm_source=qr', icon: 'Instagram' },
    { platform: 'فيسبوك', url: 'https://facebook.com/alsidrarabia', icon: 'Facebook' },
    { platform: 'لينكدإن', url: 'https://linkedin.com/company/alsidrarabia', icon: 'Linkedin' },
    { platform: 'واتساب', url: 'https://wa.me/966569209216', icon: 'MessageCircle' },
  ],
  licenseNumber: 'CR-1010234567',
  taxNumber: '300000000000003',
  cities: [],
};
