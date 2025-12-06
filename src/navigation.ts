import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Produk & Layanan', // MENU GABUNGAN 1
      href: getPermalink('/products'),
      links: [
        // Kelompok Produk
        {
          text: 'Hardware Kiosk Terminal',
          href: getPermalink('/products/kiosk-rs'), // slug tetap sama
        },
        {
          text: 'Software Antrian Travel',
          href: getPermalink('/products/software-bpjs'), // slug tetap sama
        },
        {
          text: 'Sistem Display Jadwal',
          href: getPermalink('/products/poliklinik'), // slug tetap sama
        },
        // Kelompok Layanan (Urutan di bawah produk)
        {
          text: 'Jasa Instalasi',
          href: getPermalink('/products/instalasi'),
        },
        {
          text: 'Training Operator',
          href: getPermalink('/products/training'),
        },
        {
          text: 'Maintenance',
          href: getPermalink('/products/maintenance'),
        },
      ],
    },
    {
      text: 'Portofolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Perusahaan', // MENU GABUNGAN 2
      links: [
        {
          text: 'Tentang Kami',
          href: getPermalink('/about'),
        },
        {
          text: 'Kontak & Lokasi',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Kunjungi Website Utama', href: 'https://alatantrian.com', target: '_blank', icon: 'tabler:world-www' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Produk Unggulan',
      links: [
        { text: 'Kiosk Touchscreen Terminal', href: getPermalink('/produk/kiosk-rs') }, // slug tetap
        { text: 'Software Manajemen Antrian', href: '#' },
        { text: 'Display Jadwal Keberangkatan', href: '#' },
      ],
    },
    {
      title: 'Layanan',
      links: [
        { text: 'Instalasi', href: '#' },
        { text: 'Training', href: '#' },
        { text: 'Maintenance', href: '#' },
      ],
    },
    {
      title: 'Microsite Lain',
      links: [
        { text: 'Pelayanan Publik', href: 'https://alatantrian-publik.vercel.app/' },
        { text: 'Perbankan', href: 'https://alatantrian-perbankan.vercel.app/' },
        { text: 'Pendidikan', href: 'https://alatantrian-pendidikan.vercel.app/' },
        { text: 'Kesehatan', href: 'https://alatantrian-kesehatan.vercel.app/' },
        { text: 'Transportasi', href: 'https://alatantrian-transportasi.vercel.app/' },
        { text: 'Retail', href: 'https://alatantrian-retail.vercel.app/' },
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        { text: 'AlatAntrian.com', href: 'https://alatantrian.com' },
        { text: 'Tentang Kami', href: getPermalink('/about') },
        { text: 'Kontak', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `
    © 2025 <a class="text-blue-600 underline dark:text-muted" href="https://alatantrian.com/">AlatAntrian.com Group</a> · Spesialis Sistem Antrian Transportasi & Logistik.
  `,
};