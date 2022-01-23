export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const selectFiltredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const lowFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowFilter),
  );
};
