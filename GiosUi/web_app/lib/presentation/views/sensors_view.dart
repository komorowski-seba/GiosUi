import 'package:flutter/material.dart';

class sensorsView extends StatelessWidget {
  const sensorsView({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Card(
        elevation: 6,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16)),
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Text(
            "Widok 2",
            style: TextStyle(fontSize: 28),
          ),
        ),
      ),
    );
  }
}