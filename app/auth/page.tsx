import Navbar from "../src/components/Navbar";
import Forms from "../src/sections/Forms";


export default function AuthPage() {
  return (
    <main className="flex flex-col bg-base-300 h-screen justify-between">
      <Navbar />
      <div className="flex-1 mt-14">
        <header className="max-w-7xl mx-auto w-full px-6 lg:w-3/4 text-center">
          <h1 className="text-3xl font-bold">Join the conversation</h1>
          <p className="text-base-content mt-2">
            Connect with your team in real-time
          </p>
        </header>
        <Forms />
      </div>
      <footer className="footer">
        <p>© 2024 ChatApp Messenger Inc. All rights reserved.</p>
      </footer>
    </main>
  );
}
