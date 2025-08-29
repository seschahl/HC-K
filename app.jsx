
// Cowboy Event App (CDN React + Tailwind) – no build step.
// Data embedded from 'Schema Speeddejt V3.xlsx' as of now.
const SPEED_DATA = [
  {
    "Tid": "09:00-09:15",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "ANDREAS PERSSON",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "ANTON SÄÄSKI",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "DAG SELSTAM",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "EMMA JÖNSSON",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "FREDRIK NILSSON",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "HANNA NYMAN",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "HANS MALMROS",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "HANS MALMROS",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "HANS MALMROS",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "HANS MALMROS",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "HANS MALMROS",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "HANS MALMROS",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "HANS MALMROS",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "HANS MALMROS",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "HANS MALMROS",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "HANS MALMROS",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "HANS MALMROS",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "HANS MALMROS",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "HANS MALMROS",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "HANS MALMROS",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "HANS MALMROS",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "HANS MALMROS",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "HANS MALMROS",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "HANS MALMROS",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "HANS MALMROS",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "JOAKIM SANDBERG",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "JOHAN LINDSKOG",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "JOHN HANSSON",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "JÖRGEN ENGSTRÖM",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "MARCUS NILSUND",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "SVEDBERGS I DALSTORP AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "MP Bolagen"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "SG ARMATUREN AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "FRANKE FUTURUM AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "MARTIN ROSBERG",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "DANALIM"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "SIKA SVERIGE AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "MIKAEL MARTINSSON",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "MOA ATTÅSEN",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "IP INDUSTRIPRODUKTER AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "MOLDEX"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "BÅSTADGRUPPEN-TOPSWEDE"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "OLIVER FAGERBERG",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "BLÅKLÄDER AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "3M SVENSKA AB"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "BOSCH AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "HELLERMANN TYTON AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "PATRIK ECKLEIN",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "SNA EUROPE (INDUSTRIES) AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "ORKLA WOUND CARE AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "TRANEMO TEXTIL AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "SIEVI"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "NEDERMAN NORDIC AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "GUNNEBO INDUSTRIER AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "CEJN NORDEN AB"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "HENKEL NORDEN AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "Systemtext"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "GUIDE GLOVES AB"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "ABENA"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "HULTAFORS GROUP FOOTWEAR"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "EJENDALS AB"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "ROBERT NYBERG",
    "Leverantör": "MURRELEKTRONIK"
  },
  {
    "Tid": "09:00-09:15",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "WESTAL AB"
  },
  {
    "Tid": "09:15-09:30",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "PLUM"
  },
  {
    "Tid": "09:30-09:45",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "ZARGES AB"
  },
  {
    "Tid": "09:45-10:00",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "SNICKERS WORKWEAR AB"
  },
  {
    "Tid": "10:00-10:15",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "LEDVANCE AB"
  },
  {
    "Tid": "10:15-10:30",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "FRISTADS AB"
  },
  {
    "Tid": "10:30-10:45\nPAUS",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "PAUS"
  },
  {
    "Tid": "10:45-11:00",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "KYOCERA SENCO SWEDEN AB"
  },
  {
    "Tid": "11:00-11:15",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "TECHTRONIC INDUSTRIES SWEDEN"
  },
  {
    "Tid": "11:15-11:30",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "CRC INDUSTRIES SWEDEN AB"
  },
  {
    "Tid": "11:30-11:45",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "HÖRBY BRUK"
  },
  {
    "Tid": "11:45-12:00",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "ABB ELECTRIFICATION SWEDEN"
  },
  {
    "Tid": "12:00-12:45\nLUNCH",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "LUNCH"
  },
  {
    "Tid": "12:45-13:00",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "EXAKTOR"
  },
  {
    "Tid": "13:00-13:15",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "STAHLWILLE NORDIC A/S"
  },
  {
    "Tid": "13:15-13:30",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "SUNDSTRÖMS SAFETY AB"
  },
  {
    "Tid": "13:30-13:45",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "TYROLIT AB"
  },
  {
    "Tid": "13:45-14:00",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "Ejot"
  },
  {
    "Tid": "14:00-14:15",
    "Säljare": "STEFAN NILSSON",
    "Leverantör": "SIEVI"
  }
];

const IMAGES = {
  UploadedImage0: "assets/UploadedImage0.jpg",
  UploadedImage1: "assets/UploadedImage1.jpg",
  UploadedImage2: "assets/UploadedImage2.jpg",
  UploadedImage3: "assets/UploadedImage3.jpg",
  UploadedImage4: "assets/UploadedImage4.jpg",
  UploadedImage5: "assets/UploadedImage5.jpg",
  UploadedImage6: "assets/UploadedImage6.jpg",
  UploadedImage7: "assets/UploadedImage7.jpg",
};

function classNames(...xs) { return xs.filter(Boolean).join(" "); }

const cowboy = {
  headline: { fontFamily: '"Rye", serif' },
  body: { fontFamily: '"Special Elite", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif' },
  parchmentBg: "bg-amber-50",
  ropeBorder: "border-[4px] border-stone-800 rounded-2xl",
  wood: "bg-stone-800 text-amber-50",
  woodLight: "bg-stone-700 text-amber-50",
};

function useCowboyFonts() {
  React.useEffect(() => {
    const id = "cowboy-fonts-link";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Rye&family=Special+Elite&display=swap";
      document.head.appendChild(link);
    }
  }, []);
}

function NavButton({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={classNames(
      "px-6 py-4 text-lg font-semibold shadow-md active:translate-y-[1px] transition",
      cowboy.ropeBorder, cowboy.wood, "hover:bg-stone-900", className
    )}>
      {children}
    </button>
  );
}

function BackBar({ goHome, title }) {
  return (
    <div className="sticky top-0 z-20">
      <div className={classNames("flex items-center gap-3 px-3 py-2", cowboy.wood)}>
        <button onClick={goHome} className={classNames("px-3 py-1 text-sm", cowboy.ropeBorder, "bg-stone-900 hover:bg-black")}>← Tillbaka</button>
        <div className="text-xl" style={cowboy.headline}>{title}</div>
      </div>
    </div>
  );
}

function ImageSection({ src, alt, note }) {
  return (
    <div className={classNames("p-3", cowboy.parchmentBg, cowboy.ropeBorder)}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-auto rounded-xl" />
      ) : (
        <div className="p-8 text-center opacity-70" style={cowboy.body}>Ingen bild uppladdad ännu ({alt}).</div>
      )}
      {note && <div className="text-xs mt-2 opacity-70" style={cowboy.body}>{note}</div>}
    </div>
  );
}

function Home({ go }) {
  const bg = IMAGES.UploadedImage0;
  return (
    <div className="min-h-[70vh] grid place-items-center relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/45" />
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-4xl sm:text-5xl text-amber-100 drop-shadow mb-6 text-center" style={cowboy.headline}>🐎 Välkommen till Eventappen</h1>
        <p className="text-center text-amber-50/90 mb-6" style={cowboy.body}>Tryck på en flik för att öppna den. Använd alltid "Tillbaka" för att återvända hit.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <NavButton onClick={() => go("Torsdag")}>Torsdag</NavButton>
          <NavButton onClick={() => go("Speeddejt")}>Speeddejt</NavButton>
          <NavButton onClick={() => go("Boende")}>Boende</NavButton>
          <NavButton onClick={() => go("Karta")}>Karta</NavButton>
          <NavButton onClick={() => go("Fredag")} className="col-span-2 sm:col-span-1">Fredag</NavButton>
        </div>
      </div>
    </div>
  );
}

function Torsdag({ goHome }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackBar goHome={goHome} title="Torsdag" />
      <div className="mt-4"><ImageSection src={IMAGES.UploadedImage6} alt="UploadedImage6" note="Torsdagens schema" /></div>
    </div>
  );
}

function Boende({ goHome }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackBar goHome={goHome} title="Boende" />
      <div className="mt-4"><ImageSection src={IMAGES.UploadedImage7} alt="UploadedImage7" note="Boende-information" /></div>
    </div>
  );
}

function Karta({ goHome }) {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <BackBar goHome={goHome} title="Karta" />
      <div className="mt-4"><ImageSection src={IMAGES.UploadedImage4} alt="UploadedImage4" note="Karta" /></div>
    </div>
  );
}

function Fredag({ goHome }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <BackBar goHome={goHome} title="Fredag" />
      <div className="mt-4 space-y-4">
        <ImageSection src={IMAGES.UploadedImage1} alt="UploadedImage1" />
        <ImageSection src={IMAGES.UploadedImage5} alt="UploadedImage5" />
        <ImageSection src={IMAGES.UploadedImage2} alt="UploadedImage2" />
        <ImageSection src={IMAGES.UploadedImage3} alt="UploadedImage3" />
      </div>
    </div>
  );
}

function Speeddejt({ goHome }) {
  const [seller, setSeller] = React.useState("Alla");
  const headers = ["Tid","Säljare","Leverantör"];

  const sellers = React.useMemo(() => {
    const s = new Set(SPEED_DATA.map(r => String(r["Säljare"]).trim()).filter(Boolean));
    return ["Alla", ...Array.from(s).sort((a,b) => a.localeCompare(b, 'sv'))];
  }, []);

  const rows = React.useMemo(() => {
    return SPEED_DATA.filter(r => seller === "Alla" || String(r["Säljare"]).trim() === seller);
  }, [seller]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <BackBar goHome={goHome} title="Speeddejt" />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <label className="text-sm" style={cowboy.body}>Filtrera på säljare:</label>
        <select className={classNames("px-3 py-2 border rounded-lg", cowboy.parchmentBg)} value={seller} onChange={(e) => setSeller(e.target.value)}>
          {sellers.map((name) => (<option key={name} value={name}>{name}</option>))}
        </select>
        <span className="text-sm opacity-70" style={cowboy.body}>
          {rows.length} av {SPEED_DATA.length} rader
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className={classNames("w-full text-sm", cowboy.parchmentBg, cowboy.ropeBorder)}>
          <thead className="bg-stone-200/70">
            <tr>{headers.map(h => (<th key={h} className="text-left px-3 py-2 border-b border-stone-400/60" style={cowboy.body}>{h}</th>))}</tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className={idx % 2 ? "bg-amber-100/40" : "bg-transparent"}>
                <td className="px-3 py-2 border-b border-stone-200/60" style={cowboy.body}>{row["Tid"]}</td>
                <td className="px-3 py-2 border-b border-stone-200/60" style={cowboy.body}>{row["Säljare"]}</td>
                <td className="px-3 py-2 border-b border-stone-200/60" style={cowboy.body}>{row["Leverantör"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function App() {
  useCowboyFonts();
  const [tab, setTab] = React.useState("Home");
  const go = (t) => setTab(t);
  const goHome = () => setTab("Home");

  return (
    <div className={classNames("min-h-screen", cowboy.parchmentBg)} style={cowboy.body}>
      <div className="max-w-6xl mx-auto border-8 border-stone-900 rounded-3xl shadow-xl overflow-hidden">
        {tab === "Home" && <Home go={go} /> }
        {tab === "Torsdag" && <Torsdag goHome={goHome} /> }
        {tab === "Speeddejt" && <Speeddejt goHome={goHome} /> }
        {tab === "Boende" && <Boende goHome={goHome} /> }
        {tab === "Karta" && <Karta goHome={goHome} /> }
        {tab === "Fredag" && <Fredag goHome={goHome} /> }
      </div>
      <footer className="text-center text-xs opacity-60 py-6">✨ Cowboy-tema. Bilder och Speeddejt-data är inbyggda.</footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
