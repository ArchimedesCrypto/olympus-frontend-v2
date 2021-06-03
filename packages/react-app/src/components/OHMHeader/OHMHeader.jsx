import React from "react";
import { Grid, Button } from "@material-ui/core";
import { styles } from "./styles.scss";
import { OlympusButton } from "..";

export default function OHMHeader(props) {
    return (
        <div className={styles}>
            <Grid container direction="row" spacing={2} justify="center" alignItems="center" className="header-row">
                <Grid item xs={12} md={6}>
                    <Grid container direction="row" spacing={2} justify="center" alignItems="center">
                        <Grid item xs={1} md={2}>
                            <img src="/assets/logo.svg" className="logo" />
                        </Grid>
                        <Grid item xs={1} md={2}>
                            <a href="/" className="links">
                                <p>Olympus</p>
                            </a>
                        </Grid>
                        <Grid item xs={1} md={2}>
                            <a href="/" className="links">
                                <p>Developers</p>
                            </a>

                        </Grid>
                        <Grid item xs={1} md={2}>
                            <a href="/" className="links">
                                <p>Learn</p>
                            </a>
                        </Grid>
                        <Grid item xs={1} md={2}>
                            <a href="/" className="links">
                                <p>Governance</p>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container direction="row" spacing={2} justify="center" alignItems="center">
                        <Grid item xs={12} md={6} />
                        <Grid item xs={12} md={3}>
                            <OlympusButton href="/stake" ButtonText="Enter App" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <OlympusButton href="https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x383518188c0c6d7730d91b2c03a03c837814a899" ButtonText="Get OHM" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
