import PopularCatagoriesComponents from '@/components/ui/PopularCatagoriesComponents';

const Categories = [
  {
    image:
      'https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvaXMxNjA1Ni1pbWFnZS1qb2I2MTlfMy1renc1YnJtcC5wbmc.png',
    title: 'Main Dish',
    subTitle: '(86 dishes)'
  },
  {
    image:
      // 'https://images.rawpixel.com/image_png_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX29mX2ZyZW5jaF9iYWd1ZXR0ZV93aXRoX19kNTFjNTViMC03ODRmLTRiZTgtYmEwMy00Njk0N2RkNDU4OWZfMS5wbmc.png',
      '',
    title: 'Break Fast',
    subTitle: '(12 break fast)'
  },
  {
    image:
      'https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjgxMC1ub29uLTA1XzEta3o5ajFueGoucG5n.png',
    title: 'Dessert',
    subTitle: '(48 dessert)'
  },
  {
    image:
      'https://images.rawpixel.com/image_png_1300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3BmLW1jMTEtYWtlMzExNy1jaGltLWpvYjg1MV8xLnBuZw.png',
    title: 'Browse All',
    subTitle: '(255 Items)'
  }
];

const PopularCatagories = () => {
  return (
    <div className="flex flex-col gap-3 text-center justify-center">
      <p className="text-[62px] text-black font-extrabold">
        Popular Catagories
      </p>
      <div className="flex gap-6 justify-center items-center">
        {Categories.map((category) => (
          <PopularCatagoriesComponents
            image={category.image}
            title={category.title}
            subTitle={category.subTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCatagories;
