import 'package:flutter/material.dart';

import 'notification_service.dart';

final notification = NotificationService();

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await notification.initializeTimeZone();
  await notification.initializeNotification();

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const App(),
    );
  }
}

class App extends StatefulWidget {
  const App({Key? key}) : super(key: key);

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Notification'),
      ),
      body: Column(
        children: [
          TextButton(
            onPressed: () {
              // notification.showNotification(1, 'title', 'body');
              notification.addScheduledNotification(id: 1, alarmTimeStr: '16:39', title: 'title', body: 'body');
            },
            child: const Text('Notification'),
          ),
        ],
      ),
    );
  }
}
