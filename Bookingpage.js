<Script>
Let selectedTable = '';
Function selectTable (table, tableNumber) {
  SelectedTable = table;
  document.getElementById ('selected-table').value = table;
  If (tableNumber === 1 || tableNumber === 4 || tableNumber === 6) {
    Alert ('this table is already booked. Please select another one.');
    Return;
  }
}
</script>

