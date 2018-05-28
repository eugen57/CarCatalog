class OrderController 
{
    addOrder(order)
    {
        var orderService = new OrderService();
        orderService.addOrder(order);
    };
    
    getAllOrders() {
        var orderService = new OrderService();
        var orders = orderService.getAllOrders();
        return orders;
    };
    
    updateOrder(order) {
        var orderService = new OrderService();
        orderService.updateOrder(order);
    };
    
    deleteOrderById(id) {
        var orderService = new OrderService();
        orderService.deleteOrderById(id);
    };
    
    getTableRows() {
        var orders = this.getAllOrders();
        var tableRows = "";
        tableRows += this.getColumnNamesTR();
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i];
            var status = order.status;
            tableRows += "<tr><td>"+order.id+"</td><td>"+order.id_car+"</td><td>"
                    +order.name+"</td><td>"+order.telefon+"</td><td>"+
                    order.datetime+"</td><td>"+status+"</td></tr>";
        }
        return tableRows;
    };
    
    getAllOrdersForTable(tableName) {
        var tableRows = this.getTableRows();
        var ordersTable = document.getElementById(tableName);
        ordersTable.innerHTML = tableRows;
    };
    
    getColumnNames() {
        var orderService = new OrderService();
        var columnNames = orderService.getColumnNames();
        return columnNames;
    };
    
    getColumnNamesTR() {
        var columnNames = this.getColumnNames();
        var columnNamesForTable = "<tr>";
        for (var i = 0; i < columnNames.length; i++) {
            var columnName = columnNames[i];
            columnNamesForTable+="<th>"+columnName+"</th>";
        }
        columnNamesForTable+="</tr>";
        return columnNamesForTable;
    };
 }