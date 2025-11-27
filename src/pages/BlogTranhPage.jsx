import HeroSlider from "@/components/HeroSlider";
import React from "react";
import { Link } from "react-router-dom";

const featurePost = {
  title:
    "Họa Sắc & Tranh Số Hóa: Khi Nghệ Thuật Gặp Công Nghệ để Khơi Gợi Tâm Hồn",
  date: "25/01/2025",
  image: "/images/huong-dan-to-mau-tranh-so-hoa.webp",
};

// const bottomLeftPosts = [
//   {
//     id: 1,
//     title:
//       "Tranh Tô Số Hóa – Từ “Trò Chơi Tô Màu” Thành Liệu Pháp Chữa Lành Tâm Hồn",
//     date: "25/01/2025",
//     image: "/images/banner-col-1.webp",
//     excerpt:
//       "Khám phá cách tranh tô số hóa giúp bạn tạm gác lại áp lực công việc, học tập để tìm về sự an yên trong từng nét cọ...",
//   },
//   {
//     id: 2,
//     title: "5 Lý Do Giới Trẻ Mê Mệt Tranh Tô Số Hóa: Vừa Chill Vừa Đẹp Nhà",
//     date: "25/01/2025",
//     image:
//       "/images/275110551_5175824945781558_419422465210416982_n-1024x1365.jpeg",
//     excerpt:
//       "Không chỉ là thú vui cuối tuần, tranh tô số hóa còn là cách để giới trẻ trang trí không gian sống theo phong cách rất riêng...",
//   },
//   {
//     id: 3,
//     title:
//       "Lần Đầu Thử Tranh Tô? Bí Kíp Để Bức Tranh Đầu Tay Vẫn Đẹp “Chuẩn Gallery”",
//     date: "25/01/2025",
//     image: "/images/banner-col-2.webp",
//     excerpt:
//       "Từ cách chọn mẫu, sắp xếp thời gian đến mẹo tô màu không lem, bài viết này sẽ giúp bạn tự tin với bức tranh đầu tiên...",
//   },
//   {
//     id: 4,
//     title:
//       "Từ Canvas Trắng Đến Tác Phẩm Nghệ Thuật: Hành Trình Một Bức Tranh Tô Số Hóa",
//     date: "25/01/2025",
//     image: "/images/1.png",
//     excerpt:
//       "Theo dõi hành trình một bức tranh tô số hóa từ những ô số khô khan đến tác phẩm tràn đầy cảm xúc treo trên tường nhà bạn...",
//   },
//   {
//     id: 5,
//     title:
//       "Tặng Gì Cho Người Thân? Tranh Tô Số Hóa – Món Quà Tự Tay Làm, Đậm Chất Riêng",
//     date: "25/01/2025",
//     image: "/images/huong-dan-to-mau-tranh-so-hoa.webp",
//     excerpt:
//       "Một món quà không chỉ có giá trị vật chất mà còn chứa thời gian, tâm huyết và tình cảm mà bạn gửi gắm trong từng nét cọ...",
//   },
// ];

const sidebarList = [
  {
    id: 1,
    title:
      "Vì Sao Tranh Số Hóa (Paint-by-Numbers) Lại “Gây Sốt” Trong Giới Trẻ?",
    date: "25/01/2025",
    image: "/images/1.png",
    path: "/blog-tin-tuc/vi-sao-tranh-so-hoa-gay-sot",
  },
  {
    id: 2,
    title: "Hướng Dẫn Cách Tô Tranh Số Hóa (Paint-by-Numbers) ",
    date: "25/01/2025",
    image: "/images/cach-to-mau-tranh-so-hoa.jpg",
    path: "/blog-tin-tuc/huong-dan-to-tranh-so-hoa",
  },
  {
    id: 3,
    title: "Dan Robbins: Người sáng tạo ra “Tranh số hóa",
    date: "25/01/2025",
    image: "/images/_106313465_dan.jpg",
    path: "/blog-tin-tuc/cau-chuyen-dan-robbins",
  },
];

const BlogTranhPage = () => {
  return (
    <>
      <HeroSlider />
      <div className="min-h-screen bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
            Blog Tin Tức
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-8">
              {/* Feature post */}
              <Link to="/blog-tin-tuc/hoa-sac-tranh-so-hoa">
                <article className="relative overflow-hidden rounded-xl shadow-md bg-black/5 cursor-pointer">
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={featurePost.image}
                      alt={featurePost.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <div className="px-5 pb-4 pt-10">
                      <p className="text-xs text-slate-200 mb-1">
                        {featurePost.date}
                      </p>
                      <h2 className="text-lg md:text-xl font-semibold text-white">
                        {featurePost.title}
                      </h2>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Bottom posts */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* <Link to="/blog-tin-tuc/hoa-sac-tranh-so-hoa" key={post.id}>
                  <article className="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-slate-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="flex-1 p-4 flex flex-col">
                      <h3 className="text-sm font-semibold mb-2 line-clamp-3">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500">{post.date}</p>
                      <p className="mt-2 text-xs text-slate-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link> */}
                {/* {bottomLeftPosts.map((post) => (
                  <Link to="/blog-tin-tuc/hoa-sac-tranh-so-hoa" key={post.id}>
                    <article className="flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-slate-200">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 p-4 flex flex-col">
                        <h3 className="text-sm font-semibold mb-2 line-clamp-3">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-500">{post.date}</p>
                        <p className="mt-2 text-xs text-slate-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))} */}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <aside className="space-y-6">
              <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-full lg:w-64 space-y-3">
                  {sidebarList.slice(0, 3).map((item) => (
                    <Link key={item.id} to={item.path} className="block">
                      <article className="flex gap-3 rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xs font-semibold line-clamp-3 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-400">
                            {item.date}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {sidebarList.slice(3).map((item) => (
                  <Link key={item.id} to={item.path} className="block">
                    <article className="flex gap-3 rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-200">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold line-clamp-3 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400">
                          {item.date}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogTranhPage;
