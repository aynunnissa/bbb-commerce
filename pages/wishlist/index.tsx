import Layout from "@/components/Layout";
import WishListItems from "@/features/wishlist";

export default function WishListPage() {
  return (
    <Layout>
      <main>
        <WishListItems normalText="Your Favorites Are Just a Click Away," highlightText="Check Out Now" />
      </main>
    </Layout>
  );
}
