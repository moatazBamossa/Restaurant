import { Button } from '@/components/ui/button';
import image from '../../assets/pngegg.png';
const Header = () => {
  return (
    <div className="flex justify-center items-center pr-[63.15px] pb-32">
      <div className=" flex flex-col gap-[60px] w-[50%]">
        <p className="text-[62px] text-black font-extrabold	">
          Dive into Delights Of Delectable
          <span className="text-primary"> Food</span>
        </p>
        <p className="text-[26px] font-medium text-destructive">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex items-center gap-[29px]">
          <Button
            style={{
              boxShadow: '-2px 22px 38px 0px rgba(142, 255, 154, 0.50)'
            }}
            className="flex justify-center items-center w-[229px] h-[80px] rounded-[40px] text-[26px] text-white"
          >
            Order Now
          </Button>
          <p className="text-destructive text-[26px]">Watch Video</p>
          <Button
            style={{ filter: 'drop-shadow(6px 27px 34px rgba(0, 0, 0, 0.10))' }}
            className="bg-white h-[80px] w-[80px] rounded-[40px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
            >
              <path
                d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z"
                fill="#1E1E1E"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <div className=" w-[500px] h-[500px] rounded-full bg-primary relative">
          <img
            className="rounded-full absolute bottom-0 left-[9%]"
            height={420}
            width={420}
            src={image}
          />
          <div className="flex justify-center items-center absolute bottom-[-15%] gap-2">
            {Array.from({ length: 2 }, () => (
              <div
                style={{
                  boxShadow: '7px 35px 51px 0px rgba(0, 0, 0, 0.14)'
                }}
                className=" flex items-center rounded-3xl p-3 gap-4 bg-white "
              >
                <img
                  className=" rounded"
                  src="https://www.cnet.com/a/img/resize/36e8e8fe542ad9af413eb03f3fbd1d0e2322f0b2/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=1200&width=1200"
                  height={70}
                  width={70}
                />
                <div className="flex flex-col gap-1">
                  <p>Spicy noodles</p>
                  <div className="flex gap-2">
                    {Array.from({ length: 4 }, () => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_1_247)">
                          <path
                            d="M0.884551 8.26684L3.25788 10.0002L2.35655 12.7915C2.21089 13.2244 2.20905 13.6928 2.35129 14.1269C2.49353 14.561 2.77225 14.9374 3.14588 15.2002C3.51312 15.4714 3.95815 15.6166 4.41465 15.6144C4.87116 15.6121 5.31471 15.4624 5.67922 15.1875L7.99989 13.4795L10.3212 15.1855C10.6878 15.4551 11.1304 15.6016 11.5855 15.6038C12.0405 15.606 12.4846 15.4639 12.8537 15.1978C13.2229 14.9318 13.4982 14.5555 13.6401 14.1232C13.7819 13.6908 13.783 13.2246 13.6432 12.7915L12.7419 10.0002L15.1152 8.26684C15.4813 7.99918 15.7535 7.62267 15.8928 7.1911C16.0321 6.75953 16.0315 6.29496 15.891 5.86377C15.7505 5.43257 15.4774 5.05679 15.1106 4.79011C14.7438 4.52343 14.3021 4.37949 13.8486 4.37884H10.9332L10.0486 1.62151C9.90943 1.18748 9.63606 0.808849 9.26786 0.540217C8.89967 0.271584 8.45566 0.126831 7.99989 0.126831C7.54411 0.126831 7.10011 0.271584 6.73191 0.540217C6.36371 0.808849 6.09034 1.18748 5.95122 1.62151L5.06655 4.37884H2.15388C1.70038 4.37949 1.25868 4.52343 0.891871 4.79011C0.525063 5.05679 0.251912 5.43257 0.111432 5.86377C-0.0290475 6.29496 -0.0296693 6.75953 0.109656 7.1911C0.24898 7.62267 0.521125 7.99918 0.887218 8.26684H0.884551Z"
                            fill="#FFE605"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_247">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <p className="text-destructive text-2xl">
                    <span className=" text-[#FF7979] text-lg">$</span> 18
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
