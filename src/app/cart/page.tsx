import Image from 'next/image';
import { pastaShapes } from '@/app/(config)/config';
import { notFound } from 'next/navigation';
import Button from '@/app/(components)/button';
import { CustomMDX } from '@/app/(components)/mdx';
import { sql } from "@vercel/postgres";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default function Page() {
    const {
        getAccessToken,
        getBooleanFlag,
        getFlag,
        getIdToken,
        getIntegerFlag,
        getOrganization,
        getPermission,
        getPermissions,
        getRoles,
        getStringFlag,
        getUser,
        getUserOrganizations,
        isAuthenticated
      } = getKindeServerSession();
    const rows = sql`SELECT * FROM pasta_shapes`;
  return (
    <div className=" bg-[#f1e3a3] text-[#40352F] grid min-h-screen w-full overflow-hidden lg:grid-cols-[2fr_1fr] gap-8 p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-6">
    <div className="border rounded-lg p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Cart</h2>
        <a className="text-blue-600 hover:underline" href="#">
          Edit
        </a> 
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-[80px_1fr_auto] items-center gap-4">
            <Image
                src="/placeholder.svg"
                width="80"
                height="80"
                alt="Product Image"
                className="rounded-md object-cover product-image"
            />
            <div>
                <h3 className="font-medium">Acme Lamps</h3>
                <p className="text-gray-500 dark:text-gray-400">Black, Medium</p>
            </div>
            <div className="font-medium">$49.99</div>
        </div>
        
      </div>
    </div>
    <div className="border rounded-lg p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-medium">$229.97</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-medium">$9.99</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span className="font-medium">$18.40</span>
        </div>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div>
        <div className="flex items-center justify-between font-bold">
          <span>Total</span>
          <span>$258.36</span>
        </div>
      </div>
    </div>
  </div>
  <div className="border rounded-lg p-4 md:p-6">
    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
    <form className="grid gap-4">
      <div className="grid gap-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="grid gap-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      <div className="grid gap-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="address"
        >
          Address
        </label>
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="address"
          placeholder="Enter your address"
          rows={3}
        ></textarea>
      </div>
      <div className="grid gap-2">
        <label
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          htmlFor="payment"
        >
          Payment Method
        </label>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:r1j:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          data-placeholder=""
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span style={{ pointerEvents: 'none' }}>Select payment method</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <select
            aria-hidden="true"
            tabIndex={-1}
            style={{
                position: 'absolute',
                border: '0px',
                width: '1px',
                height: '1px',
                padding: '0px',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0px, 0px, 0px, 0px)',
                whiteSpace: 'nowrap',
                overflowWrap: 'normal',
            }}
        >
            <option value=""></option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="apple-pay">Apple Pay</option>
        </select>
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
        type="submit"
      >
        Place Order
      </button>
    </form>
  </div>
    </div>
  )
}




