// JavaScript for interactive features

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Replace with actual login logic (e.g., API call)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    console.log('Logging in with username:', username);
    console.log('Password:', password);

    // Redirect to respective dashboard based on user role (Manager, Staff, Admin)
    window.location.href = 'dashboard_manager.html'; // Example redirect for manager
});

// Simulated data - replace with actual API calls or data retrieval logic
const scheduleData = [
    { date: '2024-07-01', shift: 'Morning', staff: 'John Doe' },
    { date: '2024-07-02', shift: 'Afternoon', staff: 'Jane Smith' },
    { date: '2024-07-03', shift: 'Evening', staff: 'Mike Johnson' },
    // Add more schedule entries as needed
];

// Function to display the monthly schedule
function displayMonthlySchedule() {
    const scheduleContainer = document.getElementById('scheduleContainer');
    scheduleContainer.innerHTML = ''; // Clear previous content

    scheduleData.forEach(entry => {
        const scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `
            <div><strong>Date:</strong> ${entry.date}</div>
            <div><strong>Shift:</strong> ${entry.shift}</div>
            <div><strong>Staff:</strong> ${entry.staff}</div>
        `;
        scheduleContainer.appendChild(scheduleItem);
    });
}

// Function to edit schedule (example - simulation)
function editSchedule(date, shift, staff) {
    // Simulated edit functionality, replace with actual logic
    console.log('Editing schedule for Date:', date, 'Shift:', shift, 'Staff:', staff);
    // Example: Open a modal or form for editing
}

// Function to send messages to staff (example)
function sendMessageToStaff(message) {
    // Simulated send message to staff functionality
    console.log('Sending message to staff:', message);
    // Example: Implement messaging feature via backend integration
}
document.addEventListener('DOMContentLoaded', function() {
    // Simulated data (replace with actual API calls in production)
    const scheduleData = [
        { date: 'Monday, 1st July', shift: 'Shift 1' },
        { date: 'Tuesday, 2nd July', shift: 'Shift 2' },
        { date: 'Wednesday, 3rd July', shift: 'Shift 3' }
    ];

    // Function to display monthly schedule
    function displayMonthlySchedule() {
        const scheduleList = document.getElementById('scheduleList');
        scheduleList.innerHTML = ''; // Clear existing schedule items

        scheduleData.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.date} - ${entry.shift}`;
            scheduleList.appendChild(li);
        });
    }

    // Function to edit schedule (simulated)
    function editSchedule(date, shift, staff) {
        console.log(`Editing schedule for ${date}, Shift ${shift}, Staff ${staff}`);
        // Simulated logic to update schedule in backend
        // Replace with actual backend integration
    }

    // Function to view account details (simulated)
    function viewAccountDetails() {
        const accountDetailsSection = document.getElementById('accountDetails');
        accountDetailsSection.innerHTML = `
            <h2>Account Details</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Role: Manager</p>
        `;
    }

    // Function to view leave balances (simulated)
    function viewLeaveBalances() {
        const leaveBalancesSection = document.getElementById('leaveBalances');
        leaveBalancesSection.innerHTML = `
            <h2>Leave Balances</h2>
            <p>Annual Leave: 10 days</p>
            <p>Sick Leave: 5 days</p>
        `;
    }

    // Function to approve leave request (simulated)
    function approveLeaveRequest(date, staff) {
        console.log(`Approving leave request for ${date}, Staff ${staff}`);
        // Simulated logic to approve leave request in backend
        // Replace with actual backend integration
    }

    // Function to view workload reports (simulated)
    function viewWorkloadReports() {
        const workloadReportsSection = document.getElementById('workloadReports');
        workloadReportsSection.innerHTML = `
            <h2>Workload Reports</h2>
            <p>Workload reports will be displayed here.</p>
        `;
    }

    // Function to filter schedule (simulated)
    function filterSchedule(criteria) {
        console.log(`Filtering schedule by: ${criteria}`);
        // Simulated logic to filter schedule in frontend
        // Replace with actual filtering logic
    }

    // Function to send messages to staff (simulated)
    function sendMessageToStaff(message) {
        console.log(`Sending message to staff: ${message}`);
        // Simulated logic to send message to staff in backend
        // Replace with actual backend integration
    }

    // Event listeners for interactive features
    const editScheduleButton = document.getElementById('editScheduleButton');
    editScheduleButton.addEventListener('click', function() {
        editSchedule('Monday, 1st July', 'Shift 1', 'John Doe');
    });

    const approveLeaveButton = document.getElementById('approveLeaveButton');
    approveLeaveButton.addEventListener('click', function() {
        approveLeaveRequest('Monday, 1st July', 'John Doe');
    });

    const sendMessageButton = document.getElementById('sendMessageButton');
    sendMessageButton.addEventListener('click', function() {
        const message = prompt('Enter your message:');
        if (message) {
            sendMessageToStaff(message);
        }
    });

    // Initial rendering of monthly schedule and account details
    displayMonthlySchedule();
    viewAccountDetails();
    viewLeaveBalances();
    viewWorkloadReports();
});
