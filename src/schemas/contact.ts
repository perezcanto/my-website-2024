import * as yup from 'yup'

export const createContactSchema = (t: any) =>
  yup.object({
    name: yup
      .string()
      .required(t('name.required'))
      .min(2, t('name.short'))
      .max(50, t('name.long')),
    phone: yup
      .string()
      .required(t('phone.required'))
      .min(10, t('phone.short'))
      .max(50, t('phone.long')),
    email: yup
      .string()
      .email(t('email.invalid'))
      .required(t('email.required'))
      .min(4, t('email.short'))
      .max(500, t('email.long')),
    message: yup
      .string()
      .required(t('message.required'))
      .min(10, t('message.short'))
      .max(500, t('message.long'))
  })
