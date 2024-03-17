"use client";

import Navbar from "./components/Navbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import amezunGuy from "./assets/Adsiz-tasarim-kopyasi.webp";
import amezunWork from "./assets/amezun-work.webp";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import { COIN_NAME, TAGLINE, WALLET_ID } from "./constants";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <section className="hero flex flex-row justify-center items-center p-24">
          <div>
            <h1 className="text-7xl font-medium mb-4">${COIN_NAME}</h1>
            <p className="text-lg mb-6">
              {TAGLINE}: {WALLET_ID}
            </p>
            <Button variant="outlined">Chart</Button>
          </div>
          <img src={amezunGuy.src} alt="amezun guy" className="" />
        </section>
        <section className="p-24">
          <header className="text-center mb-16">
            <h2 className="text-6xl">wiwek rama$wag</h2>
          </header>
          <div className="flex flex-row justify-center">
            <img src={amezunWork.src} alt="amezun working" className="w-1/2" />
            <div className="flex flex-col justify-center ml-20">
              <h4 className="text-5xl mb-4">{TAGLINE}</h4>
              <p>
                {`oh heyyo, me Vivek Ramaswag, dat boi who go "nuh-uh" to pharma
                biggie life, flingin' shade at thicc corp 'wokez'. Rote "Woak,
                Ink." cuz moolah > virtue-flashin', y'feel? Might yeeto into
                politix, might nawt—keepin' it saucy. #RamaSwizzle
                #KapitalizmWitKonshins`}
              </p>
            </div>
          </div>
        </section>
        <section className="p-24">
          <header className="text-center mb-16">
            <h2 className="text-6xl">how 2 buy</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/ghost.png')] bg-repeat bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full p-8">
                <h3 className="text-3xl">Create a Wallet</h3>
                <p>
                  Download Phantom or your wallet of choice from the app store
                  or google play store for free. Desktop users, download the
                  google chrome extension by going to phantom.app.
                </p>
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/solana.webp')] bg-repeat bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full p-8">
                <h3 className="text-3xl">Get Some SOL</h3>
                <p>
                  Have SOL in your wallet to switch to ${COIN_NAME}. If you
                  don’t have any SOL, you can buy SOL from an exchange or cross
                  chain swap and send it to your wallet.
                </p>
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/raydium.webp')] bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full p-8">
                <h3 className="text-3xl">Go to Raydium, Jupiter..</h3>
                <p>
                  Connect to Raydium or Jupiter. Go raydium.io or jup.ag in
                  google chrome or on the browser inside your Phantom app.
                  Connect your wallet. Paste the ${COIN_NAME} token address into
                  Raydium or Jupiter and confirm the swap. When Phantom prompts
                  you for a wallet signature, sign.
                </p>
              </div>
            </Paper>
            <Paper elevation={3} className="rounded-2xl">
              <div className="bg-black/70 w-full h-full p-8">
                <h3 className="text-3xl">Switch SOL for {COIN_NAME}</h3>
                <p>
                  Switch SOL for ${COIN_NAME}. We have ZERO taxes so you don’t
                  need to worry about buying with a specific slippage, although
                  you may need to use slippage during times of market
                  volatility.
                </p>
              </div>
            </Paper>
          </div>
        </section>
        <footer className="flex flex-col items-center pt-24 pb-8">
          <p className="text-4xl mb-1">{COIN_NAME}</p>
          <p className="text-xl mb-2 text-gray-400">{TAGLINE}</p>
          <p className="mb-4">{WALLET_ID}</p>
          <div className="flex flex-row gap-4">
            <IconButton onClick={() => {}}>
              <XIcon />
            </IconButton>
            <IconButton onClick={() => {}}>
              <TelegramIcon />
            </IconButton>
          </div>
        </footer>
      </main>
    </div>
  );
}
