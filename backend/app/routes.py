from flask import Blueprint, request, jsonify
import csv
main = Blueprint('main', __name__)
    
@main.route('/inventory/<barcode>', methods=['GET'])
def get_product(barcode):
    # Dummy data for demonstration purposes
    product = {
        "O_Name": "Gold Necklace",
        "Weight": 20,
        "Price": 500
    }
    return jsonify(product)

# @main.route('/billing', methods=['POST'])
# def save_bill():
#     data = request.get_json()
#     # Save bill logic here
#     return jsonify({"message": "Bill saved successfully"}), 201

@main.route('/inventory/verify', methods=['POST'])
def verify_product():
    data = request.get_json()
    barcode = data['barcode']
    # Verify product logic here
    return jsonify({"message": "Product verified successfully"})

def read_users():
    users = {}
    with open('users.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            users[row['username']] = row['password']
    return users

@main.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    users = read_users()
    if username in users and users[username] == password:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Login failed"}), 401

@main.route('/billing', methods=['POST'])
def billing():
    data = request.json
    # Process billing data
    return jsonify({"message": "Billing processed"}), 200

@main.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the username already exists
    users = read_users()
    if username in users:
        return jsonify({"message": "User already exists"}), 400

    # Save the new user to the CSV file
    with open('users.csv', mode='a', newline='') as csvfile:
        fieldnames = ['username', 'password']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow({'username': username, 'password': password})

    return jsonify({"message": "Registration successful"}), 201
