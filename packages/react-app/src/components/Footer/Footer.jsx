import React from "react";
import { Grid, Button } from "@material-ui/core";
import { styles } from "./styles.scss";
import { OlympusButton } from "..";

export default function Footer(props) {
  return (
    <div className={styles}>
      <Grid container direction="row" spacing={2} justify="center" alignItems="flex-start" className="footer-row">
        <Grid item xs={6} md={2} className="footer-icon">
          <img src="/assets/logo.svg" className="logo" />
        </Grid>
        <Grid item xs={6} md={2} className="footer-menu-column">
          <h4>Developers</h4>
          <a href="https://docs.olympusdao.finance">
            <p>Documentation</p>
          </a>
          <a href="https://github.com/olympusDAO">
            <p>Github</p>
          </a>
        </Grid>
        <Grid item xs={6} md={2} className="footer-menu-column">
          <h4>Governance</h4>
          <a href="http://vote.olympusdao.finance/">
            <p>Vote</p>
          </a>
          <a href="https://forum.olympusdao.finance">
            <p>Forum</p>
          </a>
        </Grid>
        <Grid item xs={6} md={2} className="footer-menu-column">
          <h4>Community</h4>
          <a href="https://twitter.com/OlympusDAO">
            <p>Twitter</p>
          </a>
          <a href="https://discord.gg/tmbtUpR6CF">
            <p>Discord</p>
          </a>
          <a href="https://olympusdao.medium.com/">
            <p>Medium</p>
          </a>
        </Grid>
        <Grid item xs={6} md={2}>
          <OlympusButton href="/stake" ButtonText="Enter App" />
        </Grid>
      </Grid>
    </div>
  );
}
