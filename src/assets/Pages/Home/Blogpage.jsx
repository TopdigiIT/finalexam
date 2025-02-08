import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Start Reselling Fashion Accessories',
      date: 'January 20, 2025',
      excerpt: 'Learn the basics of reselling fashion accessories, from sourcing to marketing, and how to make a profit.',
      image: '/src/assets/home-images/01.jpg',
      link: '/blog/how-to-start-reselling-fashion-accessories',
    },
    {
      id: 2,
      title: 'The Best Resale Jackets for Winter 2025',
      date: 'January 18, 2025',
      excerpt: 'Explore the top resale jackets for winter that combine both style and warmth, perfect for every wardrobe.',
      image: '/src/assets/home-images/02.webp',
      link: '/blog/the-best-resale-jackets-for-winter-2025',
    },
    {
      id: 3,
      title: 'Why Reselling Sneakers is a Smart Investment',
      date: 'January 15, 2025',
      excerpt: 'Sneaker reselling is booming. Learn why it’s a profitable market and how you can get started today.',
      image: '/src/assets/home-images/03.webp',
      link: '/blog/why-reselling-sneakers-is-a-smart-investment',
    },
    {
      id: 4,
      title: 'How to Source the Best Resale T-Shirts',
      date: 'January 12, 2025',
      excerpt: 'Find out where to source high-quality resale t-shirts and how to spot valuable items for reselling.',
      image: '/src/assets/home-images/04.webp',
      link: '/blog/how-to-source-the-best-resale-t-shirts',
    },
    {
      id: 5,
      title: 'Tips for Reselling Pre-Loved Watches',
      date: 'January 10, 2025',
      excerpt: 'Watches are a growing market in reselling. Learn tips on finding quality watches and increasing their value.',
      image: '/src/assets/home-images/05.webp',
      link: '/blog/tips-for-reselling-pre-loved-watches',
    },
    {
      id: 6,
      title: 'Resale Bags: What to Look For in 2025',
      date: 'January 8, 2025',
      excerpt: 'Explore the top bags for resale in 2025, how to spot valuable pieces, and tips on pricing.',
      image: '/src/assets/home-images/06.jpg',
      link: '/blog/resale-bags-what-to-look-for-in-2025',
    },
    {
      id: 7,
      title: 'How to Maximize Profit from Reselling Hoodies',
      date: 'January 5, 2025',
      excerpt: 'Learn how to flip hoodies for profit, including where to buy, how to price, and how to sell.',
      image: '/src/assets/home-images/07.webp',
      link: '/blog/how-to-maximize-profit-from-reselling-hoodies',
    },
    {
      id: 8,
      title: 'The Rise of Vintage Resale Accessories',
      date: 'January 3, 2025',
      excerpt: 'Vintage accessories are in high demand. Find out what makes them valuable and how to sell them.',
      image: '/src/assets/home-images/08.webp',
      link: '/blog/the-rise-of-vintage-resale-accessories',
    },
    {
      id: 9,
      title: 'Top Strategies for Reselling Streetwear in 2025',
      date: 'December 30, 2024',
      excerpt: 'Discover effective strategies for reselling streetwear and how to tap into this popular market.',
      image: '/src/assets/home-images/06.jpg',
      link: '/blog/top-strategies-for-reselling-streetwear-in-2025',
    },
    {
      id: 10,
      title: 'Maximizing Profits with Resale Sneakers',
      date: 'December 28, 2024',
      excerpt: 'Learn how to make the most of sneaker resale, including where to buy, how to price, and when to sell.',
      image: '/src/assets/home-images/04.webp',
      link: '/blog/maximizing-profits-with-resale-sneakers',
    },
    {
      id: 11,
      title: 'How to Authenticate Resale Bags',
      date: 'December 25, 2024',
      excerpt: 'Authenticity is key in reselling bags. Learn how to authenticate luxury resale bags and avoid counterfeits.',
      image: '/src/assets/home-images/07.webp',
      link: '/blog/how-to-authenticate-resale-bags',
    },
    {
      id: 12,
      title: 'Essential Tools for Reselling Fashion Items',
      date: 'December 22, 2024',
      excerpt: 'Discover the best tools and resources you need to succeed in the reselling fashion industry.',
      image: '/src/assets/home-images/07.webp',
      link: '/blog/essential-tools-for-reselling-fashion-items',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">Reselling Products Blog</h1>
        <p className="mt-2 text-gray-600">Tips, Insights, and Trends for Reselling Fashion Items</p>
      </header>

      <section className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="border-b pb-6 flex items-center space-x-6">
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                <a href={post.link} className="hover:text-blue-500">
                  {post.title}
                </a>
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
              <a href={post.link} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
