export const INDONESIAN_MONTHS = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
] as const

export const INDONESIAN_DAYS_SHORT = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'] as const

export const INDONESIAN_DAYS_LONG = [
  'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
] as const

export function getIndonesianMonthName(month: number): string {
  return INDONESIAN_MONTHS[month] ?? ''
}

export function getIndonesianDayName(day: number, short = true): string {
  if (short) return INDONESIAN_DAYS_SHORT[day] ?? ''
  return INDONESIAN_DAYS_LONG[day] ?? ''
}

export function formatDateDisplay(year: number, month: number, day?: number): string {
  const monthName = getIndonesianMonthName(month)
  if (day) return `${day} ${monthName} ${year}`
  return `${monthName} ${year}`
}

export function formatMonthYear(year: number, month: number): string {
  return `${getIndonesianMonthName(month)} ${year}`
}
