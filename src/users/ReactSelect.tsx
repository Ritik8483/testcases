import {  useState } from "react";
import Box from "@mui/material/Box";
import { ClickAwayListener, Typography } from "@mui/material";

const options = [
  { value: 10, name: "Ten" },
  { value: 20, name: "Twenty" },
  { value: 30, name: "Thirty" },
];

function Select(props: any): any {
  const { options, onChange } = props;
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, selectOption] = useState(null);

  function onSelectItem(item: any) {
    onChange?.(item);
    selectOption(item?.name);
    setOpenSelect(false);
  }

  const handleClickAway = () => {
    setOpenSelect(false);
  };

  console.log("openSelect", openSelect);

  const handleClick = () => {
    setOpenSelect((prev) => !prev);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "8px",
              borderRadius: "4px",
              transition: "all .2s",
              background: "#F5F4F4",
              border: "1px solid #ECEAEA",
              width: 293,

              "&:hover": {
                background: "#eee",
                cursor: "pointer",
              },
            }}
            onClick={handleClick}
          >
            <Typography fontSize="14px" fontStyle="normal" fontWeight="400">
              {selected || "Select a Program"}
            </Typography>
            <Box sx={{ width: "24px", height: "24px" }}>
              <svg
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                style={{ fill: "#9C9696" }}
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </Box>
          </Box>

          {openSelect ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "310px",
                boxSizing: "border-box",
                color: "#333",
                marginTop: "4px",
                borderRadius: "4px",
                position: "absolute",
                top: "45px",
                padding: "16px",
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.24)",
                border: "1px solid #D3DAE6",
                zIndex: "99999",
                transition:
                  "opacity cubic-bezier(0.34, 1.61, 0.7, 1) 350ms, visibility cubic-bezier(0.34, 1.61, 0.7, 1) 350ms, transform cubic-bezier(0.34, 1.61, 0.7, 1) 450ms, -webkit-transform cubic-bezier(0.34, 1.61, 0.7, 1) 450ms",
                transform: "translateY(-8px) translateZ(0)",
                opacity: 1,
                visibility: "visible",
                pointerEvents: "auto",
              }}
            >
              <Box
                onClick={(e: any) => e.stopPropagation()}
                sx={{
                  backgroundColor: "#fff",
                  padding: "14px 16px",
                  width: "100%",
                  zIndex: "1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  "&:hover": {
                    backgroundColor: "#fff !important",
                  },
                  "&:focus": {
                    backgroundColor: "#fff !important",
                  },
                }}
              >
                <input
                  type="text"
                  placeholder="Search"
                  // value={searchValue}
                  // onChange={(e: any) => setSearchValue(e.target.value)}
                  style={{
                    borderRadius: "8px",
                    padding: "14px 16px",
                    width: "100%",
                    // backgroundColor: "var(--lightGray)",
                    backgroundColor: "red",
                    border: "none",
                    paddingRight: "25px",
                    fontFamily: "var(--fontFamiljen)",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    color: "var(--searchColor)",
                    outline: "0",
                  }}
                />
              </Box>
              {options?.map((item: any) => (
                <Typography
                  key={item?.id}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  sx={{
                    padding: "8px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    width: "100%",
                    "&:hover": { background: "#F5F4F4" },
                  }}
                  onClick={() => onSelectItem(item)}
                >
                  {item?.name}
                </Typography>
              ))}
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </>
  );
}

export default function BasicSelect() {
  return <Select options={options} />;
}
