import { Facebook } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 sm:bottom-4 sm:right-4 sm:gap-3">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61582192517515&mibextid=wwXIfr&rdid=dTmQZodgwavp9K9u&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16KKF6XGzm%2F%3Ffrom_xma_click%3Dxma_web_url%26xma_click_id%3D64925436-EF05-43B5-A260-3C3B61F1EC69%26tam_xma_content_type%3D0%26is_fb_content%3Dtrue%26forward%3Dfalse%26ts%3D1763615090014%26pl%3D1#"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-white shadow-lg sm:h-12 sm:w-12"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>

      {/* TikTok (SVG custom) */}
      <a
        href="https://www.tiktok.com/@tranhhoasac?_r=1&_t=ZS-91Y3uMwePZ3&fbclid=IwZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNDM3NjI2MzE2OTczNzg4AAEe7uzpjD6SDUZqS7XcLxuREhslJunqHDFRZkubuOWbXIrVN7CpedVqK8_QSFw_aem_5uIOpSCOiJzzhoAoqETHZg"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full bg-black text-white shadow-lg sm:h-12 sm:w-12"
        aria-label="TikTok"
      >
        <svg
          viewBox="0 0 48 48"
          className="h-6 w-6 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M41 12.4c-2.3 0-4.4-.7-6.2-1.9-2-1.3-3.5-3.2-4.4-5.4-.3-.8-.5-1.7-.6-2.5h-7v28.3c0 
            2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2c.5 0 1 .1 1.5.3v-7.2c-.5-.1-1-.1-1.5-.1-6.8 
            0-12.3 5.5-12.3 12.3S15 40.1 21.8 40.1s12.3-5.5 12.3-12.3V15c1.8 1.2 3.9 
            1.8 6.2 1.8h.8v-4.4H41z" />
        </svg>
      </a>
    </div>
  );
}
