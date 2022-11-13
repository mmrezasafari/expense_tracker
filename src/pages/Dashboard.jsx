import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { NotFound } from "../components/import";
import classes from "./style.module.css";

export default function Dashboard() {
  return (
    <>
      <section className={classes.wrapper_card}>
        <article>
          <Accordion
            display="flex"
            justifyContent="space-between"
            defaultIndex={[0]}
            allowMultiple
          >
            <div style={{ width: "38%" }}>
              <AccordionItem>
                <AccordionButton className={classes.accordion_head}>
                  <Box
                    flex="1"
                    textAlign="left"
                    className={classes.accordion_box}
                  >
                    NET WORTH
                  </Box>
                  <Box flex="0.5">
                    <p>0 TOMAN</p>
                  </Box>
                  <AccordionIcon fontSize="27px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <NotFound text={"You don't have any accounts"} />
                </AccordionPanel>
              </AccordionItem>
            </div>

            <div style={{ width: "58%" }}>
              <AccordionItem>
                <AccordionButton className={classes.accordion_head}>
                  <Box
                    flex="1"
                    textAlign="left"
                    className={classes.accordion_box}
                  >
                    NEW TRANSACTION
                  </Box>
                  <AccordionIcon fontSize="27px" />
                </AccordionButton>
                <AccordionPanel>
                  <NotFound text={"You don't have any accounts"} />
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton className={classes.accordion_head}>
                  <Box
                    flex="1"
                    textAlign="left"
                    className={classes.accordion_box}
                  >
                    RECENT TRANSACTIONS
                  </Box>
                  <AccordionIcon fontSize="27px" />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <NotFound text={"No transactions found"} />
                </AccordionPanel>
              </AccordionItem>
            </div>
          </Accordion>
        </article>
      </section>
    </>
  );
}
