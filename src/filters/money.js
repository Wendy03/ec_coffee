export default function (money) {
  const parts = money.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `NT $${parts.join('.')}`;
}
