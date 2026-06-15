

card.innerHTML = `
    <h3>${service.name}</h3>
    <p><strong>Type:</strong> ${service.type}</p>
    <p><strong>Availability:</strong> ${service.availability}</p>
    <p><strong>Description:</strong> ${service.description}</p>

    <button data-id="${service.id}">
        View Details
    </button>
`;