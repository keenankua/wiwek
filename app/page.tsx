"use client";

import * as React from "react";
import Navbar from "./components/Navbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import vivek from "./assets/vivek-himself.png";
import vivekNotepad from "./assets/vivek-notepad.jpeg";
import vivekRockChild from "./assets/vivek-rock-child.png";
import XIcon from "@mui/icons-material/X";
import {
  COIN_NAME,
  TAGLINE,
  CONTRACT_ADDRESS,
  TWITTER_HANDLE,
} from "./constants";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <section className="hero flex flex-col lg:flex-row justify-center items-center p-24">
          <div
            className="bg-black/40 p-8 break- rounded-2xl md:bg-transparent"
            style={{
              maxWidth: "100vw",
            }}
          >
            <h1 className="text-6xl sm:text-8xl font-medium mb-4">
              ${COIN_NAME}
            </h1>
            <p className="text-3xl sm:text-4xl mb-6">{TAGLINE}</p>
            <p className="text-lg mb-6 w-full break-words">
              {CONTRACT_ADDRESS}
            </p>
            <Button variant="outlined">Chart</Button>
          </div>
          <img
            src={vivek.src}
            alt="vivek"
            className="absolute -z-10 -right-4 lg:relative lg:z-auto lg:right-auto"
          />
        </section>
        <section className="py-16 sm:p-8 md:p-16">
          <img
            src={vivekNotepad.src}
            alt="supply: 1000000, tax: 0/0"
            className="w-full"
          />
        </section>
        <section className="p-8 sm:p-16">
          <header className="text-center mb-8">
            <h2 className="text-5xl sm:text-6xl md:text-8xl">wiwek rama$wag</h2>
          </header>
          <div className="flex flex-col sm:flex-row justify-center">
            <img
              src={vivekRockChild.src}
              alt="me + rock + child"
              className="w-full sm:w-1/2"
            />
            <div className="flex flex-col justify-center mt-8 sm:mt-0 sm:ml-8 md:ml-20">
              <h4 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-400">
                {TAGLINE}
              </h4>
              <p className="text-lg">
                {`oh heyyo, me Vivek Ramaswag (the 1 in the middl), dat boi who go "nuh-uh" to pharma
                biggie life, flingin' shade at thicc corp 'wokez'. Rote "Woak,
                Ink." cuz moolah > virtue-flashin', y'feel? Might yeeto into
                politix, might nawt—keepin' it saucy. #RamaSwizzle
                #KapitalizmWitKonshins`}
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 sm:p-8 md:p-24">
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-8xl">how 2 buy</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/ghost.png')] bg-repeat bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full flex flex-row md:flex-col lg:flex-row p-8">
                <p className="text-8xl">1</p>
                <div className="ml-8">
                  <h3 className="text-4xl">Get a Wallet</h3>
                  <p className="text-lg">
                    {`Get Phantom or your preferred wallet for free from the App
                    Store or Google Play Store. If you're on a desktop, add the
                    Google Chrome extension by visiting `}
                    <a href="https://www.phantom.app">phantom.app</a>.
                  </p>
                </div>
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/solana.webp')] bg-repeat bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full flex flex-row md:flex-col lg:flex-row p-8">
                <p className="text-8xl">2</p>
                <div className="ml-8">
                  <h3 className="text-4xl">Get some SOL</h3>
                  <p className="text-lg">
                    Connect your wallet to any central exchange and buy some
                    SOL.
                  </p>
                </div>
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/raydium.webp')] bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full flex flex-row md:flex-col lg:flex-row p-8">
                <p className="text-8xl">3</p>
                <div className="ml-8">
                  <h3 className="text-4xl">Buy {COIN_NAME} with SOL</h3>
                  <p className="text-lg">
                    Go to <a href="https://raydium.io">raydium.io</a> or{" "}
                    <a href="https://jup.ag">jup.ag</a> and connect your wallet.
                    Paste the ${COIN_NAME} token address into Raydium or Jupiter
                    and confirm the swap.
                  </p>
                </div>
              </div>
            </Paper>
            <Paper
              elevation={3}
              className="rounded-2xl bg-[url('./assets/smiling-emoji.jpg')] bg-center"
              style={{
                backgroundSize: "25%",
              }}
            >
              <div className="bg-black/70 w-full h-full flex flex-row md:flex-col lg:flex-row p-8">
                <p className="text-8xl">4</p>
                <div className="ml-8">
                  <h3 className="text-4xl">Now u have ${COIN_NAME}</h3>
                  <p className="text-lg">{`that's it ur done`}</p>
                </div>
              </div>
            </Paper>
          </div>
        </section>
        <footer
          className="flex flex-col items-center pt-24 pb-4 px-6 text-center"
          style={{
            maxWidth: "100vw",
          }}
        >
          <p className="text-5xl mb-1">{COIN_NAME}</p>
          <p className="mb-4 text-xl text-gray-400 w-full break-words">
            {CONTRACT_ADDRESS}
          </p>
          <div className="flex flex-row gap-4">
            <IconButton href={`https://twitter.com/${TWITTER_HANDLE}`}>
              <XIcon />
            </IconButton>
          </div>

          <Button className="mt-6" onClick={handleClickOpen}>
            Disclaimer
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {`Please be advised that ${COIN_NAME} Memecoin is a cryptocurrency
                created for entertainment purposes and is not affiliated with or
                endorsed by Vivek Ramaswamy. While ${COIN_NAME} Memecoin may
                reference or incorporate elements related to Vivek Ramaswamy's
                persona, image, or likeness, it does not imply any direct
                endorsement, partnership, or approval by Vivek Ramaswamy. Any
                resemblance or association between ${COIN_NAME} Memecoin and
                Vivek Ramaswamy is purely coincidental and intended for
                satirical or humorous purposes.`}
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </footer>
      </main>
    </div>
  );
}
