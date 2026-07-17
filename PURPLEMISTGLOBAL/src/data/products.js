import { GiPerfumeBottle, GiChemicalDrop, GiMedicines, GiGearHammer, GiCargoCrate } from 'react-icons/gi';
import { FaLaptopCode } from 'react-icons/fa';

export const products = [
  {
    id: 'fragrance',
    title: 'Perfumery Compound Oils',
    icon: GiPerfumeBottle,
    description:
      'Premium fragrance compounds sourced from established Asian manufacturers for soaps, detergents, cosmetics and industrial use.',
    items: [
      'Soap Fragrance Oils',
      'Detergent Fragrance Oils',
      'Cosmetic Fragrance Oils',
      'Industrial Fragrance Oils',
      'Perfume Compound Oils',
      'Attar Compounds',
    ],
  },
  {
    id: 'cosmetics',
    title: 'Cosmetics & Personal Care',
    icon: GiChemicalDrop,
    description:
      'A curated range of beauty and personal care formulations built on consistent quality and international compliance standards.',
    items: ['Beauty Products', 'Personal Care', 'Skin Care', 'Hair Care'],
  },
  {
    id: 'pharma',
    title: 'Pharmaceuticals',
    icon: GiMedicines,
    description:
      'Reliable sourcing of medical supplies and pharmaceutical products backed by rigorous quality verification.',
    items: ['Medical Supplies', 'Healthcare Products', 'Pharmaceutical Products'],
  },
  {
    id: 'hardware',
    title: 'Industrial Hardware',
    icon: GiGearHammer,
    description:
      'Engineering-grade components and mechanical equipment procured for industrial and energy-sector clients, including ONGC-grade materials.',
    items: ['Industrial Hardware', 'Engineering Components', 'Mechanical Equipment'],
  },
  {
    id: 'software',
    title: 'Software Solutions',
    icon: FaLaptopCode,
    description:
      'Enterprise software and business solutions that support modern procurement and operational workflows.',
    items: ['Business Solutions', 'ERP Solutions', 'Enterprise Software'],
  },
  {
    id: 'procurement',
    title: 'Procurement Services',
    icon: GiCargoCrate,
    description:
      'End-to-end procurement support, from vendor discovery to shipment, for businesses sourcing across Asia.',
    items: ['International Sourcing', 'Vendor Development', 'Import Documentation', 'Quality Inspection'],
  },
];
