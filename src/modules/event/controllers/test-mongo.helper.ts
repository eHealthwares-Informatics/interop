import mongoose from 'mongoose';
import { MongoMemoryReplSet } from 'mongodb-memory-server';

let replset: MongoMemoryReplSet;

export async function startMongo(): Promise<string> {
  replset = await MongoMemoryReplSet.create({
    binary: {
      version: '6.0.6',
      downloadDir: './mongo-binaries',
    },
    replSet: {
      count: 1,
      storageEngine: 'wiredTiger',
    },
  });

  const uri = replset.getUri();
  await mongoose.connect(uri);
  return uri;
}

export async function stopMongo(): Promise<void> {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();

  if (replset) {
    await replset.stop();
  }
}