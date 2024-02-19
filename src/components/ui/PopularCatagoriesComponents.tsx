import { FC, useState } from 'react';
import looking from '../../assets/locking.svg';

type PopularCatagoriesComponentsT = {
  image: string;
  title: string;
  subTitle: string;
};

const PopularCatagoriesComponents: FC<PopularCatagoriesComponentsT> = (
  props
) => {
  const { image, title, subTitle } = props;

  const [img, setImg] = useState(image);
  return (
    <div
      style={{
        boxShadow: '2px 10px 30px 0px rgba(0, 0, 0, 0.10)'
      }}
      className="py-4 px-12 flex flex-col rounded-[40px] gap-1"
    >
      <div
        style={{ background: '#C1F1C6' }}
        className="p-4 rounded-full flex justify-center items-center"
      >
        <img
          alt={img}
          src={img}
          width={80}
          style={{ borderRadius: 100, height: 80 }}
          onError={() => setImg(looking)}
        />
      </div>
      <p className=" text-[20px] text-black ">{title}</p>
      <p className=" text-[15px] text-destructive ">{subTitle}</p>
    </div>
  );
};

export default PopularCatagoriesComponents;
