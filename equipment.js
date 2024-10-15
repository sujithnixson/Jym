angular.module('equipmentApp', [])
.controller('EquipmentController', function() {
    this.newEquipment = {};
    this.equipmentList = [];
    this.searchQuery = '';

    this.addEquipment = () => {
        if (this.newEquipment.name && this.newEquipment.status) {
            this.equipmentList.push({
                name: this.newEquipment.name,
                status: this.newEquipment.status
            });
            // Clear form fields
            this.newEquipment.name = '';
            this.newEquipment.status = '';
        } else {
            // Optionally handle validation errors here
            alert('Please fill out all fields.');
        }
    };

    this.deleteEquipment = (index) => {
        this.equipmentList.splice(index, 1);
    };

    this.search = () => {
        // This is just a placeholder for the search button functionality
        // The filtering is already handled by AngularJS's built-in filter
    };
});