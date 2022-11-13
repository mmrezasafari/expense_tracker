import { Select } from "@chakra-ui/react";
import classes from "./style.module.css";
import pouchDB from 'pouchdb'

export default function Report() {
  return (
    <>
      <section className={classes.wrapper_card} id="report">
        <article className={classes.filter_button_container}>
          <div>
            <Select name="calender" border="none" cursor="pointer">
              <option value="expenseIncome">Expense & Income</option>
              <option value="expenseByTages">Expense by Tages</option>
              <option value="netIncome">Net Income</option>
              <option value="netWorth">Net Worth</option>
            </Select>
          </div>
        </article>
      </section>
    </>
  );
}
