export function getPayload(values: Record<string, string | boolean>) {
  const formData = new FormData();
  Object.keys(values).forEach(key => {
    formData.append(key, (values as any)[key]);
  });
  return formData;
}
