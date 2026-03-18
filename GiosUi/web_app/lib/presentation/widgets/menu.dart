import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'providers.dart';

class SideMenu extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final current = ref.watch(navigationProvider);

    Widget item(String title, IconData icon, AppView view) {
      final selected = current == view;

      return ListTile(
        leading: Icon(icon, color: selected ? Colors.blue : Colors.grey),
        title: Text(
          title,
          style: TextStyle(
            color: selected ? Colors.blue : Colors.black87,
            fontWeight: selected ? FontWeight.bold : FontWeight.normal,
          ),
        ),
        onTap: () {
          ref.read(navigationProvider.notifier).state = view;
        },
      );
    }

    return Container(
      width: 250,
      color: Colors.grey[100],
      child: Column(
        children: [
          DrawerHeader(
            child: Text(
              "Menu",
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          item("Widok 1", Icons.home, AppView.view1),
          item("Widok 2", Icons.settings, AppView.view2),
        ],
      ),
    );
  }
}