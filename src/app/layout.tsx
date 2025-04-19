// src/app/layout.tsx
import { ClerkProvider, SignedOut, SignIn, SignedIn, UserButton,} from '@clerk/nextjs';
import './globals.css';

export const metadata = { title: 'My Site' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header className="flex justify-between"> 
          
          <UserButton showName/>
          
           </header>
        <SignedOut>
          <SignIn routing="hash"/>
          </SignedOut>
        
        <SignedIn>
        {children}
        </SignedIn>
        </body>
    </html>
    </ClerkProvider>
  );
}
