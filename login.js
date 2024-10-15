angular.module('loginApp', [])
.controller('LoginController', function($http) {
    var vm = this;
    vm.email = '';
    vm.password = '';

    vm.login = function() {
        if (!vm.email || !vm.password) {
            alert('Please enter both email and password');
            return;
        }

        $http.post('/api/login', {
            email: vm.email,
            password: vm.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(function(response) {
            if (response.data.success) {
                // Handle successful login (e.g., redirect to another page, store token, etc.)
                alert('Login successful');
                // Optionally, redirect to a different page
                window.location.href = '/home'; // Replace with your actual redirect URL
            } else {
                alert('Login failed: ' + response.data.message);
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    };
});
