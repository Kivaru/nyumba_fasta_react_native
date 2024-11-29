export function getRoleId(role: string) {
  const roleIdMapping = {
    'Home Owner': 2,
    Renter: 3,
    Broker: 4,
  };
  // @ts-ignore
  return roleIdMapping[role];
}
