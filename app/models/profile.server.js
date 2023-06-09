import { prisma } from "~/db.server";

export function getProfile({ id, userId }) {
  return prisma.profile.findFirst({
    select: { id: true, city:true, postalcode:true, state:true, country:true, address2:true,address1:true, date:true, account:true, phone:true, gmail:true, lastname:true, firstname:true},
    where: { id, userId },
  });
}

export function getProfileListItems({ userId }) {
  return prisma.profile.findMany({
    where: { userId },
    select: { id: true, firstname: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createProfile({ firstname, lastname, gmail, phone, account, birthdate, address1, address2, country, state, postalcode, city, userId }) {
  return prisma.profile.create({
    data: {
      firstname,
      lastname,
      gmail,
      phone,
      account,
      birthdate,
      address1,
      address2,
      country,
      state,
      postalcode,
      city,
      user: {        
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteProfile({ id, userId }) {
  return prisma.profile.deleteMany({
    where: { id, userId },
  });
}