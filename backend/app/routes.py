from flask import Blueprint, request, jsonify

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

@main.route('/billing', methods=['POST'])
def save_bill():
    data = request.get_json()
    # Save bill logic here
    return jsonify({"message": "Bill saved successfully"}), 201

@main.route('/inventory/verify', methods=['POST'])
def verify_product():
    data = request.get_json()
    barcode = data['barcode']
    # Verify product logic here
    return jsonify({"message": "Product verified successfully"})
