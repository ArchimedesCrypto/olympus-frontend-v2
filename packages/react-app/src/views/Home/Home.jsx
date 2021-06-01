/* eslint-disable jsx-a11y/accessible-emoji */

import { Select } from "antd";
import React, { useState } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import { LogoSvg } from "../../assets/logo.svg";

import { styles } from "./styles.scss";

export default function Home() {
  return (
    /*<div className={styles}>
      <div className="column">
        <div className="block hero">
          <div className="d-flex flex-column" style={{ position: "absolute" }}>
            <a href="https://defipulse.com/" target="_blank" className="pb-4" rel="noreferrer">
              <img
                src="../../assets/defipulse.svg"
                alt=""
                className="social-icon-small"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
            <a href="https://olympusdao.medium.com/" target="_blank" className="pb-4" rel="noreferrer">
              <img
                src="../../assets/medium.svg"
                alt=""
                className="social-icon-small"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
            <a href="https://twitter.com/OlympusDAO" target="_blank" className="pb-4" rel="noreferrer">
              <img
                src="../../assets/twitter.svg"
                alt=""
                className="social-icon-small"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
            <a href="https://discord.gg/6QjjtUcfM4" target="_blank" className="pb-4" rel="noreferrer">
              <img
                src="../../assets/discord.svg"
                alt=""
                className="social-icon-small"
                style={{ height: "25px", width: "25px" }}
              />
            </a>
          </div>

          <div className="hero-icon">
            <img src="../../assets/logo.svg" alt="" />
          </div>
          <h1 className="mb-4 main-title">An Algorithmic Currency Protocol</h1>
          <p className="centered-text hero-desc">
            Olympus utilizes Protocol Owned Value to enable price consistency and scarcity within an infinite supply
            system.
          </p>
          {/!* <router-link
                :to="{ name: 'stake' }"
                 style="margin:2rem auto;max-width:200px; color: black !important;"
                 class="button button-primary btn btn-lg button-centered"
            >
                Enter App
            </router-link> *!/}
        </div>
        <div className="block">
          <div className="row-responsive flex-centered mb-9" id="what">
            <h1 className="centered-text">What is Olympus?</h1>
          </div>

          <div className="row-responsive flex-centered">
            <div className="feature-box-module">
              <div className="feature-block-image">
                <img src="../../assets/Backedbyassets-banner.png" alt="" />
              </div>
              <div className="feature-block-desc">
                <h3>Backed by Assets</h3>
                <p>
                  Every OHM is backed by DAI and OHM-DAI LP in the treasury. This intrinsic value cannot be diluted,
                  providing a fundamental check on inflation.
                </p>
              </div>
            </div>
            <div className="feature-box-module">
              <div className="feature-block-image">
                <img src="../../assets/Algo--banner.png" alt="" />
              </div>
              <div className="feature-block-desc">
                <h3>Algorithmically Managed</h3>
                <p>
                  Olympus has an adjustable policy state, allowing the DAO to adjust parameters and algorithmically
                  optimize for stability or growth.
                </p>
              </div>
            </div>
            <div className="feature-box-module">
              <div className="feature-block-image">
                <img src="../../assets/community-banner.png" alt="" />
              </div>
              <div className="feature-block-desc">
                <h3>Community Governed</h3>
                <p>
                  Olympus is a DAO first project actively working toward complete distribution of the system to the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block row-responsive no-pad">
          <div className="row-flex-max feature-row py-9">
            <div className="row-flex-desc">
              <h2>What makes Olympus unique?</h2>
              <p>
                Olympus is a floating algorithmic currency. This means that it has mechanisms to promote stability and
                predictability without directly pegging to any asset. However, we take it one step further with the
                introduction of adjustable policy; the DAO can move certain variables up and down to target growth and
                profitability or stability and predictability.
              </p>
            </div>
          </div>
          <div className="row-flex-image feature-image">
            <img src="../../assets/olympus1.svg" alt="" />
          </div>
        </div>
        <div className="block">
          <div className="row-responsive flex-centered mb-9" id="how">
            <h1 className="centered-text">How It Works</h1>
          </div>

          <div className="row-responsive flex-centered">
            <div className="works-module-responsive">
              <div className="works-icon">
                <img src="../../assets/features/reserves.svg" alt="" />
              </div>
              <div className="works-desc">
                <h3>Reserves</h3>
                <p>
                  OHM is always backed by one DAI or one OHM backed by one DAI. This creates a demand-based constraint
                  on issuance of supply.
                </p>
              </div>
            </div>
            <div className="works-module-responsive">
              <div className="works-icon">
                <img src="../../assets/features/marketops.svg" alt="" />
              </div>
              <div className="works-desc">
                <h3>Market Operations</h3>
                <p>
                  New OHM is created via direct sales into the market. These sales increase linearly with the market
                  premium and produce profits for stakers.
                </p>
              </div>
            </div>
          </div>
          <div className="row-responsive flex-centered">
            <div className="works-module-responsive">
              <div className="works-icon">
                <img src="../../assets/features/governance.svg" alt="" />
              </div>
              <div className="works-desc">
                <h3>Governance</h3>
                <p>
                  The DAO controls policy tools that allow us to loosen, increasing profitability and volatility, or
                  tighten, increasing stability and predictability.
                </p>
              </div>
            </div>
            <div className="works-module-responsive">
              <div className="works-icon">
                <img src="../../assets/features/bonding.svg" alt="" />
              </div>
              <div className="works-desc">
                <h3>Bonding</h3>
                <p>
                  New OHM is created via deferred sales for LP. Bonders lock their LP for a vesting term and receive a
                  discount on OHM when the trade ultimately occurs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block row-responsive no-pad">
          <div className="row-flex-image feature-image">
            <img src="../../assets/olympus2.svg" alt="" />
          </div>

          <div className="row-flex-max feature-row">
            <div className="row-flex-desc">
              <h2>A world of opportunity</h2>
              <p>
                The Olympus reserve system enables new implementations of a multitude of DeFi primitives. Interest and
                liquidation-free leverage and borrowing, counterparty-free options and derivatives, trustless
                undercollateralized lending and more are possible. The future is bright.
              </p>
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="row-responsive flex-centered mb-11" id="how">
            <h1 className="centered-text">Backed by</h1>
          </div>

          <div className="row justify-content-center mb-4 mb-sm-11">
            <div className="col-sm-3 mb-4 mb-sm-0 text-center">
              <img src="../../assets/investors/defialliance.svg" alt="" style={{ height: "96px" }} />
            </div>

            <div className="col-sm-3 mb-4 mb-sm-0 col-offset-1 text-center">
              <img src="../../assets/investors/maven11.svg" alt="" style={{ height: "96px" }} />
            </div>

            <div className="col-sm-3 mb-4 mb-sm-0 text-center">
              <img src="../../assets/investors/zeeprime.svg" alt="" style={{ height: "96px" }} />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-3 mb-4 mb-sm-0 text-center">
              <img src="../../assets/investors/nascent.svg" alt="" style={{ height: "96px" }} />
            </div>

            <div className="col-sm-3 mb-4 mb-sm-0 text-center">
              <img src="../../assets/investors/d64.svg" alt="" style={{ height: "96px" }} />
            </div>
          </div>
        </div>
        {/!*
      <Footer />
      *!/}
      </div>
    </div>*/
    <div className={styles}>
      <Container maxWidth="xl" className="root-container">
        <Grid container spacing={1}>
          <Grid item xs className="hero">
            <div className="hero-icon">
              <img src={LogoSvg} alt="" />
            </div>
            <h1 className="mb-4 main-title">An Algorithmic Currency Protocol</h1>
            <p className="centered-text hero-desc">
              Olympus utilizes Protocol Owned Value to enable price consistency and scarcity within an infinite supply
              system.
            </p>
            <Button> Enter App</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
