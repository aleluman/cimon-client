const units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
};

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export const getRelativeTime = (d1: Date) => {
  const elapsed = d1.getTime() - new Date().getTime();
  const keys = Object.keys(units) as Array<keyof typeof units>;

  const unit = keys.find(
    (currentUnit) => Math.abs(elapsed) > units[currentUnit] || currentUnit === "minute"
  );

  return unit ? rtf.format(Math.round(elapsed / units[unit]), unit) : "less than a minute ago";
};
