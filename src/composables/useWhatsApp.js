import { computed } from 'vue';
import { useI18n } from '../i18n';

const envNumber = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').toString();
const sanitizedNumber = envNumber.replace(/[^\d]/g, '');

export function useWhatsApp(messageKey = 'common.bookingMessage') {
  const { t } = useI18n();

  const whatsappLink = computed(() => {
    if (!sanitizedNumber) {
      return null;
    }

    const message = encodeURIComponent(t(messageKey));
    return `https://wa.me/${sanitizedNumber}?text=${message}`;
  });

  const isWhatsappConfigured = computed(() => Boolean(whatsappLink.value));

  const handleWhatsappClick = (event) => {
    if (!whatsappLink.value && event) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return {
    whatsappLink,
    isWhatsappConfigured,
    handleWhatsappClick
  };
}
