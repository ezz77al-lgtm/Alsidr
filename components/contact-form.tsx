'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { services } from '@/lib/data/services';
import { cities } from '@/lib/data/cities';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
const [selectedService, setSelectedService] = useState('');

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const name = form.get('name') as string;
  const phone = form.get('phone') as string;
  const message = (form.get('message') as string) || '';

  const cityName =
    cities.find((c) => c.slug === selectedCity)?.name || selectedCity;

  const serviceName =
    services.find((s) => s.slug === selectedService)?.shortName || selectedService;

  const whatsappNumber = '966569209216'; 

  const text = `*طلب خدمة جديد*

👤 الاسم: ${name}

📞 رقم الجوال: ${phone}

🏙️ المدينة: ${cityName}

🛠️ الخدمة: ${serviceName}

📝 تفاصيل الطلب:
${message}`;

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    '_blank'
  );

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="card-soft flex flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">تم استلام طلبك بنجاح</h3>
        <p className="mb-6 max-w-md text-muted-foreground">
          شكرًا لتواصلك مع شركة السدر العربية للمقاولات. سيتواصل معك فريقنا خلال 24 ساعة لتقديم عرض السعر.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          إرسال طلب آخر
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft space-y-5 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">الاسم الكامل *</Label>
          <Input id="name" name="name" required placeholder="اكتب اسمك" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">رقم الجوال *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            dir="ltr"
            required
            placeholder="05xxxxxxxx"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">المدينة *</Label>
          <Select
  value={selectedCity}
  onValueChange={setSelectedCity}
>
            <SelectTrigger id="city">
              <SelectValue placeholder="اختر المدينة" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((c) => (
                <SelectItem key={c.slug} value={c.slug}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">الخدمة المطلوبة *</Label>
          <Select
              value={selectedService}
              onValueChange={setSelectedService}
            >
            <SelectTrigger id="service">
              <SelectValue placeholder="اختر الخدمة" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.shortName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">تفاصيل الطلب</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="اكتب تفاصيل احتياجك..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <Send className="h-4 w-4" />
        إرسال الطلب
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        بالضغط على إرسال الطلب فإنك توافق على أن يتواصل معك فريقنا لتقديم عرض سعر مجاني.
      </p>
    </form>
  );
}
