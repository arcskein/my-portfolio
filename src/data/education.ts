import type { ICertificate, Locale } from '../types'

const CERTIFICATES: Record<Locale, ICertificate[]> = {
  en: [
    {
      name: 'Computers, Systems, and Networks',
      issuer: 'Polotsk State University',
      date: '2023-present ',
      details: 'Third-year student'
    },
    {
      name: 'Modsen Hackathon Certificate',
      issuer: 'Modsen',
      date: '2023',
      details: 'For second place in the development of a project to implement AI in smart city concepts.',
      url: 'https://www.modsen-software.com/certificate-found?receiptDate=2023-11-28T00%3A00%3A00.000Z&certificateId=139542394',
    },
  ],
  ru: [
    {
      name: 'Вычислительные машины, системы и сети',
      issuer: 'Полоцкий государственный университет',
      date: '2023-н.в.',
      details: 'На третьем курсе.'
    },
    {
      name: 'Сертификат Modsen Hackathon',
      issuer: 'Modsen',
      date: '2023',
      details: 'За второе место в разработке проекта по внедрению ИИ в концепции умного города.',
      url: 'https://www.modsen-software.com/certificate-found?receiptDate=2023-11-28T00%3A00%3A00.000Z&certificateId=139542394',
    }
  ],
}

export const getCertificates = (locale: Locale): ICertificate[] => CERTIFICATES[locale]