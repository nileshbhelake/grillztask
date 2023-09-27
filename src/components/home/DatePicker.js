import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const today = dayjs();
const tomorrow = dayjs().add(1, "day");
const todayEndOfTheDay = today.endOf("day");

const DateFiled = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DemoItem label="DatePicker">
          <DatePicker
            defaultValue={tomorrow}
            disableFuture
            views={["year", "month", "day"]}
          />
        </DemoItem>
        <DemoItem label="TimePicker">
          <TimePicker defaultValue={todayEndOfTheDay} disableFuture />
        </DemoItem>
        {/* <DemoItem label="DateTimePicker"> */}
        {/* <DateTimePicker
            defaultValue={tomorrow}
            disableFuture
            views={["year", "month", "day", "hours", "minutes"]}
          /> */}
        {/* </DemoItem> */}
        {/* <DemoItem label="DateRangePicker" component="DateRangePicker">
          <DateRangePicker defaultValue={[today, tomorrow]} disableFuture />
        </DemoItem> */}
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateFiled;
