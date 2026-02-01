import Arrow from "../assets/ArrowRight.svg";
import googlePlay from "../assets/googlePlay.svg";
import appleLogo from "../assets/appleLogo.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#191C1F] py-10 px-[clamp(2rem,3vw,4rem)] flex justify-between gap-x-16">
        <div>
          <div className="text-white cursor-pointer mb-4 text-[clamp(2rem,calc(2vw+0.4rem),5rem)]">
            UNITED DEAL
          </div>
          <div className="text-[var(--footer-link-color)] text-sm">
            Customer Supports:
            <div className="text-white text-lg cursor-pointer mb-2">
              (234) 111-1234
            </div>
          </div>
          <div className="text-[var(--footer-link-color)] text-sm w-[11.1rem] mb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
          </div>
          <div className="text-white text-sm cursor-pointer">
            info@gmail.com
          </div>
        </div>
        <div>
          <div className="text-white mb-2">TOP CATEGORY</div>
          {["Computer & Laptop", "SmartPhone", "HeadPhone"].map((v, i) => (
            <div
              key={i}
              className="text-[var(--footer-link-color)] cursor-pointer text-sm mb-2"
            >
              {v}
            </div>
          ))}
          <div className="text-white mb-2">
            <span className="text-[#EBC80C] font-bold mr-2">―</span>
            Accessories
          </div>
          <div>
            {["Camera & Photo", "TV & Homes"].map((v, i) => (
              <div
                key={i}
                className="text-[var(--footer-link-color)] cursor-pointer text-sm mb-2"
              >
                {v}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-x-2 text-[#EBC80C] cursor-pointer">
            Broswe All Product
            <img src={Arrow} alt="arrow" className="mt-[3px] w-5" />
          </div>
        </div>
        <div>
          <div className="text-white mb-2">QUICK LINKS</div>
          {[
            "Shop Product",
            "Shoping Cart",
            "Wishlist",
            "Refund Policy",
            "Shipping Policy",
            "Privacy Policy",
            "Terms of Service",
          ].map((v, i) => {
            return (
              <div
                key={i}
                className="text-[var(--footer-link-color)] cursor-pointer text-sm not-last:mb-2"
              >
                {v}
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-white mb-2">DOWNLOAD APP</div>
          {[
            { logo: googlePlay, name: "Google Play" },
            { logo: appleLogo, name: "Apple Store" },
          ].map((v, i) => {
            return (
              <div key={i}>
                <div className="bg-[#303639] text-white flex mb-3 rounded-sm pr-6 pl-5 py-4">
                  <div className="flex gap-x-3 cursor-pointer">
                    <img src={v.logo} alt={v.name} className="h-8 mt-[9px]" />
                    <div className="text-xs">
                      Get it now
                      <div className="text-lg font-semibold">{v.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-fit">
          <div className="text-white mb-2">POPULAR TAG</div>
          <span className="inline-block max-w-[320px]">
            {[
              "Game",
              "iPhone",
              "TV",
              "Asus Laptops",
              "Macbook",
              "SSD",
              "Graphics Card",
              "Power Bank",
              "Smart TV",
              "Speaker",
              "Tablet",
              "Microwave",
              "Samsung",
            ].map((v, i) => (
              <button
                key={i}
                className="my-1 cursor-pointer mx-1 text-sm text-white border-[2px] border-[#303639] rounded-sm px-2 py-1 hover:border-white hover:bg-[#303639]"
              >
                {v}
              </button>
            ))}
          </span>
        </div>
      </div>
    </>
  );
}
