import Tabs from './Components/Tabs';

function App() {

  const tabs = [
    {
      title: 'Accounts',
      content: 'Money owed by a business to its suppliers shown as a liability on a companys balance sheet. It is distinct from notes payable liabilities, which are debts created by formal legal instrument documents.'
    },
    {
      title: 'Payroll',
      content: 'Payroll is the total of all compensation a business must pay to its employees for a set period of time or on a given date.'
    },
    {
      title: 'Tax',
      content: 'A tax refund or tax rebate is a payment to the taxpayer due to the taxpayer having paid more tax than they owed.'
    },
  ];
  
  return (
    <>
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;
