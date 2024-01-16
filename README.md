This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Guide to build a shoping cart

## Product List:

- Displays a list of available products.
- Includes product image, name, price, and a button to add to cart.
- Manages product data, either fetched from an API or stored locally.

## Add to Cart Button:

- Triggered when a user clicks to add a product.
- Updates the cart state (usually using React State or Context API).
- Provides visual feedback to confirm the addition (e.g., a success message or animation).

## Cart Icon:

- Persistently displayed in the header or navigation.
- Indicates the number of items in the cart.
- Expands to reveal a mini cart summary or links to the full cart page.

## Cart Summary (optional):

- Displays a condensed view of the cart contents.
- Usually appears when hovering over or clicking the cart icon.
- Lists product names, quantities, and prices, along with a total price.
- \*\*After building these core components, you can advance to:

## Cart Page:

- Dedicated page for viewing and managing cart items.
- Lists each item with details and options to adjust quantity or remove.
- Calculates and displays subtotals, taxes, and total price.
- Provides a checkout button to initiate the purchase process.

### Additional Considerations:

- State Management: Choose a suitable approach for managing cart data (e.g., React State, Context API, or Redux).
- Styling: Use CSS or a styling library to create a visually appealing and user-friendly interface.
- Data Fetching: If using external data, implement mechanisms to fetch and display products efficiently.
- Error Handling: Implement proper error handling to gracefully address potential issues.
- Accessibility: Ensure the cart is accessible to users with disabilities.
- Testing: Write comprehensive tests to ensure the cart's functionality and reliability.
