export const categoryAdapter = (data: any) => {
  const categoryFormat = data.map((item: any) => {
    const category: TCategory = {
      name: item.name,
    };
    return category;
  });

  return categoryFormat;
};
